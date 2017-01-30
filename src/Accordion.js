import React, { Component } from 'react';

class Accordion extends Component {
    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }
    
    onClick() {
        // Allow off-click window event to fire first
        setTimeout(function() {
            this.props.handleClick(this.props.name)
        }.bind(this));
        
        // Keep document same height after accordion close
        setTimeout(() => {
            document.documentElement.style.height = document.body.scrollHeight + 'px';
        }, 550);
    }
    
    render() {
        const style = {
            maxHeight: this.props.isOpen ? '1000px' : this.props.closedHeight
        };
        const additionalClass = this.props.className !== undefined ? ' ' + this.props.className : '';
        return (
            <div className={`accordion${additionalClass}`} style={style} onClick={this.onClick}>
                <span>{this.props.name} {this.props.isOpen ? '^' : '>'}</span>
                {this.props.children}
            </div>
        );
    }
}

export default Accordion;