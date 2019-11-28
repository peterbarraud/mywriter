import React, {Component} from 'react'

// display when template id is selected
export class Template extends Component {
    constructor(props){
        super(props)
    }
    handleSaveClick = e => {
        // two things happen here
        // first the template is saved
        // TODO: save stuff goes here
        console.log('save template');

        // second we inform the itemlist to refresh
        // BUT only if it's worth refreshing
        // which means:
        // refresh the item list only if one of the following happens
        // 1. a new item was created
        // 2. an existing item's title was changed
        // so what we send back to the parent not about the changes
        // it's simply whether or not to refresh the item list
        // TODO: Only call the following conditionally
        this.props.ontemplateUpdated();

    }

    // update the template when new "template id" is selected in the item list
    componentDidUpdate = (prevProps) => {
        if (this.props.selectedTemplateID !== prevProps.selectedTemplateID) {
            console.log("lets update template with new template id: " + this.props.selectedTemplateID);
        }
        return true;
    }

    render = () => {
        return (
            <>
                <h1>Template id {this.props.selectedTemplateID} is selected</h1>
                <button onClick={this.handleSaveClick}>Save</button>
            </>    
        )
    }
}

export default Template;
