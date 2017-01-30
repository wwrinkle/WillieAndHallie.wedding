import React from 'react';
import photo from './our_story_photo.jpg';

function OurStory() {
    return (
        <div className="our-story">
            <img src={photo} alt="Hallie and Willie Waco"/>
            <p>Ok, so it goes like this. We met through a mutual friend, Mathilde, in Paris. We knew each other a grand total of a week before we decided that this was something worth pursuing. After that it was a lot of fun until Willie had to go home. We were apart for a year and came back together in Chicago. We moved to LA where Willie decided to become a web developer and Hallie started her Cantorial studies. Now, we are in Carrollton starting yet another chapter. Getting married feels like a good way to bring in this year and this part of our lives together. Thank you for celebrating it with us!</p>
        </div>
    );   
}

export default OurStory;