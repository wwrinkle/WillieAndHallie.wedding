import React, { Component } from 'react';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(event) {
        this.props.onClick(event.target.innerText);
    }
    
    render() {
        return (
            <div className="tabs">
                <span onClick={this.handleClick} className={this.props.openTab === 'Agoura Hills Wedding' ? 'open-tab' : ''}>Agoura Hills Wedding</span>
                <span onClick={this.handleClick} className={this.props.openTab === 'Carrollton Shindig' ? 'open-tab' : ''}>Carrollton Shindig</span>
            </div>
        ); 
    }
    
}

export default Tabs;