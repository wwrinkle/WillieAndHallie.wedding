import React from 'react';
import photo from './hallie_and_willie.jpg';

function Pictures() {

    return (
        <div className="pictures">
            <p>Please use the hashtag <a href="https://www.instagram.com/explore/tags/hallieandwillie/" target="_blank">#HallieAndWillie</a> so we can see all of the wonderful pictures you take at our event.</p>
            <img src={photo} alt="Hallie and Willie" />
        </div>
    );
}

export default Pictures;