import React from 'react';

function ViewPane(props) {
    const style = {
        display: props.show ? 'block' : 'none'
    };
    return (
        <div className="view-pane" style={style}>
            <h3>Where</h3>
            <p dangerouslySetInnerHTML={{__html:props.eventInformation.where}} />
            <h3>When</h3>
            <p dangerouslySetInnerHTML={{__html:props.eventInformation.when}} />
            <h3>Things To Do</h3>
            <p dangerouslySetInnerHTML={{__html:props.eventInformation.thingsToDo}} />
            <h3>Where To Stay</h3>
            <p dangerouslySetInnerHTML={{__html:props.eventInformation.whereToStay}} />
        </div>
    );
}

export default ViewPane;