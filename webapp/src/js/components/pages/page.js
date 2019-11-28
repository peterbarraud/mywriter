import React, {Component} from 'react'


// display when no page id is selected

// display when page id is selected
export class Page extends Component {
    constructor(props){
        super(props)
    }
    handleSaveClick = e => {
        // two things happen here
        // first the page is saved
        // TODO: save stuff goes here
        console.log('save page');

        // second we inform the itemlist to refresh
        // BUT only if it's worth refreshing
        // which means:
        // refresh the item list only if one of the following happens
        // 1. a new item was created
        // 2. an existing item's title was changed
        // so what we send back to the parent not about the changes
        // it's simply whether or not to refresh the item list
        // TODO: Only call the following conditionally
        this.props.onPageUpdated();

    }

    // update the page when new "page id" is selected in the item list
    componentDidUpdate = (prevProps) => {
        if (this.props.selectedPageID !== prevProps.selectedPageID) {
            console.log("lets update page with new page id: " + this.props.selectedPageID);
        }
        return true;
    }

    render = () => {
        return (
            <>
                <h1>Page id {this.props.selectedPageID} is selected</h1>
                <button onClick={this.handleSaveClick}>Save</button>
            </>    
        )
    }
}

export default Page;
