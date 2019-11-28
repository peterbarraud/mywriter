import React, {Component} from 'react'

import ListGroup from 'react-bootstrap/ListGroup';

export class ItemList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedid:null,
        }
    }
    hanldeItemClicked = (id, e) => {
        this.setState({selectedid:id});
        // this will call the parent handleItemSelected
        this.props.onItemIDChange(id);
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.listUpdateCounter !== prevProps.listUpdateCounter) {
            console.log("update list");
        }
        return true;
    }

    render() {
        return (
            <ListGroup>
                {this.props.items.map((id, idx) => (
                    <ListGroup.Item action onClick={(e) => this.hanldeItemClicked(id, e)} key={id} id={id} active={id == this.state.selectedid ? true : false} >
                        This one is a button abc def ghi hig pig di {id}
                </ListGroup.Item>))}
            </ListGroup>
        )
    }
}

export default ItemList;
