var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var mongoClient = require('mongodb').MongoClient;
var mongoUrl = 'MONGOURL';
var XLSX = require('xlsx');

var nodemailer = require('nodemailer');
var mailgunApiTransport = require('nodemailer-mailgunapi-transport');
var transporter = nodemailer.createTransport(mailgunApiTransport({
    apiKey: 'API_KEY',
    domain: 'DOMAIN'
}));

app.set('port', process.env.PORT || 7003);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sendrsvp', function(req, res) {
    mongoClient.connect(mongoUrl, function(err, db) {
        db.collection('responses').insertOne(req.body, function(err, result) {
            console.log("Reservation recieved.");
            res.send(result.insertedId);
            generateXLSXDoc();
        });
    });
});

function generateXLSXDoc() {
    mongoClient.connect(mongoUrl, function(err, db) {
        var workbook = {
            SheetNames: [],
            Sheets: {}
        };
        var docIndex = 2;

        function generateCellObject(value) {
            var t;
            if (typeof value == 'string') {
                t = 's';
            } else if (typeof value == 'number') {
                t = 'n';
            } else if (typeof value == 'boolean') {
                t = 'b';
            }
            return {
                t: t,
                v: value
            };
        }
        var worksheet = {
            A1: generateCellObject('Name'),
            B1: generateCellObject('Attending: Agoura Hills Wedding'),
            C1: generateCellObject('Number'),
            D1: generateCellObject('Attending: Carrollton Shindig'),
            E1: generateCellObject('Number'),
            F1: generateCellObject('Message')
        };
        var cursor = db.collection('responses').find();
        cursor.each(function(err, doc) {
            if (doc != null) {
                //worksheet[docIndex] = JSON.parse(JSON.stringify(doc));
                worksheet['A' + docIndex] = generateCellObject(doc.name);
                worksheet['B' + docIndex] = generateCellObject(doc.event.agoura.attending);
                worksheet['C' + docIndex] = generateCellObject(doc.event.agoura.number);
                worksheet['D' + docIndex] = generateCellObject(doc.event.carrollton.attending);
                worksheet['E' + docIndex] = generateCellObject(doc.event.carrollton.number);
                worksheet['F' + docIndex] = generateCellObject(doc.message);
                docIndex++;
            } else {
                worksheet['!ref'] = 'A1:E' + (docIndex - 1);
                var keys = [];
                for (key in worksheet) {
                    keys.push(key);
                }
                var sortedWorksheet = {};
                keys.forEach(function(key) {
                    sortedWorksheet[key] = worksheet[key];
                });
                console.log(sortedWorksheet);
                workbook.SheetNames.push('reponses');
                workbook.Sheets['reponses'] = sortedWorksheet;
                XLSX.writeFile(workbook, 'wedding_rsvps.xlsx');
                sendSpreadsheet();
                db.close();
            }
        });
    });
}

function sendSpreadsheet() {
    transporter.sendMail({
        from: 'Wedding Website <donotreplay@hallieandwillie.wedding>',
        to: 'RECIPIENT',
        subject: 'RSVP Spreadsheet',
        text: 'Here is the latest RSVP spreadsheet',
        attachments: [{
            filename: 'wedding_rsvps.xlsx',
            path: 'wedding_rsvps.xlsx'
        }]
    }, function(err, info) {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log('Email Sent');
            console.log('Response: ' + info);
        }
    });
}

app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(app.get('port'), function() {
    console.log('Server is running on port ' + app.get('port'));
});