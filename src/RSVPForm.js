import React, { Component } from 'react';

class RSVPForm extends Component {
    constructor() {
        super();
        this.state = {
            submitMessage: ''
        };
        this.form = {
            name: '',
            event: {
                agoura: {
                    attending: '',
                    number: ''
                },
                carrollton: {
                    attending: '',
                    number: ''
                }
            },
            message: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const formSubmission = {
            name: this.form.name.value,
            event: {
                agoura: {
                    attending: this.form.event.agoura.attending.checked,
                    number: this.form.event.agoura.number.valueAsNumber
                },
                carrollton: {
                    attending: this.form.event.carrollton.attending.checked,
                    number: this.form.event.carrollton.number.valueAsNumber
                }
            },
            message: this.form.message.value
        } 
        
        var that = this;
        
        fetch("/sendrsvp", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formSubmission)
        }).then(function(response) {
            console.log(response);
            if (response.status !== 200) {
                that.setState({ submitMessage: 'Something went wrong. Please try again.' });
            }
            return response;
        }).then(function(data) {
            
            // Clear form
            that.form.name.value = '';
            that.form.event.agoura.attending.checked = false;
            that.form.event.agoura.number.valueAsNumber = 0;
            that.form.event.carrollton.attending.checked = false;
            that.form.event.carrollton.number.valueAsNumber = 0;
            that.form.message.value = '';
            
            that.setState({ submitMessage: 'Thank you for your response.' });
        }).catch(function(error) {
            console.error(error);
            //that.setState({ submitMessage: 'Something went wrong. Please try again.' });
        });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <div className="name">
                    <label>Name</label>
                    <input type="text" ref={(input) => this.form.name = input} required />
                </div>
                
                <div className="events">
                    <div className="event">
                        <div className="attending">
                            <label>Agoura Hills Wedding</label>
                            <input type="checkbox" ref={(input) => this.form.event.agoura.attending = input} />
                        </div>
                        <div className="number-of-guests">
                            <label>Number of guests attending</label>
                            <input type="number" min="0" defaultValue="0" ref={(input) => this.form.event.agoura.number = input} />
                        </div>
                    </div>
                    
                    <div className="event">
                        <div className="attending">
                            <label>Carrollton Shindig</label>
                            <input type="checkbox" ref={(input) => this.form.event.carrollton.attending = input} />
                        </div>
                        <div className="number-of-guests">
                            <label>Number of guests attending</label>
                            <input type="number" min="0" defaultValue="0" ref={(input) => this.form.event.carrollton.number = input} />
                        </div> 
                    </div>
                </div>
                
                <div className="message">
                    <label>Message</label>
                    <textarea ref={(input) => this.form.message = input} />
                </div>
                
                <input type="submit" value="Submit" />
                    
                <p className="submit-message">{this.state.submitMessage}</p>
            </form>
        
        )
    }
    
    
}

export default RSVPForm;