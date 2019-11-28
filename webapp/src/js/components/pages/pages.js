// react
import React, {Component} from 'react'

// this project
import { Page } from './page';
import ItemList from '../item.list';
import { NoItemSelected } from '../no.item.selected'

// bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class Pages extends Component {
    constructor(props) {
        super(props);
        this.state = {items: [1, 5, 102], selecteditemid:null, updatinglist: 0};
    }

    handleItemSelected = (id) => {
        this.setState({selecteditemid: id});
    }

    handleItemUpdated = () => {
        var listcounter = this.state.listcounter + 1;
        this.setState({listcounter: listcounter});
        console.log("item saved");
    }
    
    render = () => {
        return (
            <Container fluid={true}>
                <Row>
                    <Col lg={2}><ItemList items={this.state.items} onItemIDChange={this.handleItemSelected} listUpdateCounter={this.state.listcounter} /></Col>
                    <Col>{this.state.selecteditemid ? <Page selectedPageID={this.state.selecteditemid} onPageUpdated={this.handleItemUpdated} /> : <NoItemSelected itemName="Page" />}</Col>
                    
                </Row>
            </Container>
        )
    }
}
