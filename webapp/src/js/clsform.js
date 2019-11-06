import React, {Component} from 'react'

// using the class syntax
export class ClsForm extends Component {
    state = {
        username : '',
        password : ''
    }
    handleclick = e => {
        console.log(this.state.username);
        console.log(this.state.password);
        e.preventDefault();
    }
    // mandatory to manage the state of a input element
    usernameChange = e => {
        this.setState({username: e.target.value});
    }
    passwordChange = e => {
        this.setState({password: e.target.value});
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Simple form</legend>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="Username" placeholder="Username" value={this.state.username} onChange={this.usernameChange} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange}/>
                    <button className="primary" onClick={this.handleclick}>Click Me! </button>
                </fieldset>
            </form> 
        )
    }
}
// using the class syntax
