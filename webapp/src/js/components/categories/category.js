import React, {Component} from 'react'

// display when category id is selected
export class Category extends Component {
    constructor(props){
        super(props)
    }
    handleSaveClick = e => {
        // two things happen here
        // first the category is saved
        // TODO: save stuff goes here
        console.log('save category');

        // second we inform the itemlist to refresh
        // BUT only if it's worth refreshing
        // which means:
        // refresh the item list only if one of the following happens
        // 1. a new item was created
        // 2. an existing item's title was changed
        // so what we send back to the parent not about the changes
        // it's simply whether or not to refresh the item list
        // TODO: Only call the following conditionally
        this.props.oncategoryUpdated();

    }

    // update the category when new "category id" is selected in the item list
    componentDidUpdate = (prevProps) => {
        if (this.props.selectedCategoryID !== prevProps.selectedCategoryID) {
            console.log("lets update category with new category id: " + this.props.selectedCategoryID);
        }
        return true;
    }

    render = () => {
        return (
            <>
                <h1>Category id {this.props.selectedCategoryID} is selected</h1>
                <button onClick={this.handleSaveClick}>Save</button>
            </>    
        )
    }
}

export default Category;
