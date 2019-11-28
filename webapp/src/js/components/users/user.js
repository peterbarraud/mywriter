import React, {Component} from 'react'

// display when user id is selected
export class User extends Component {
    constructor(props){
        super(props)
    }
    handleSaveClick = e => {
        // two things happen here
        // first the user is saved
        // TODO: save stuff goes here
        console.log('save user');

        // second we inform the itemlist to refresh
        // BUT only if it's worth refreshing
        // which means:
        // refresh the item list only if one of the following happens
        // 1. a new item was created
        // 2. an existing item's title was changed
        // so what we send back to the parent not about the changes
        // it's simply whether or not to refresh the item list
        // TODO: Only call the following conditionally
        this.props.onuserUpdated();

    }

    // update the user when new "user id" is selected in the item list
    componentDidUpdate = (prevProps) => {
        if (this.props.selectedUserID !== prevProps.selectedUserID) {
            console.log("lets update user with new user id: " + this.props.selectedUserID);
        }
        return true;
    }

    render = () => {
        return (
            <>
                <h1>User id {this.props.selectedUserID} is selected</h1>
                <button onClick={this.handleSaveClick}>Save</button>
            </>    
        )
    }
}

export default User;
