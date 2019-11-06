import React, {Component} from 'react'

// using the class syntax
export class SeeYou extends Component {
    timeinhours = (mins) => {
        return mins / 60;
    }
    render() {
        const {mins, color} = this.props
        return (
            <h2 style={{color: color}}>See you in {mins} minutes. Or {this.timeinhours(mins)} hours</h2>
        )
    }
}
// using the class syntax
