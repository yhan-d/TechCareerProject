import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import ProductService from '../services/ProductService';

class ViewProductComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
          //gelen id almak
          id: this.props.match.params.id,
          product: {},
        }
      }
    
      //cdm
      componentDidMount() {
        ProductService.getProductById(this.state.id).then((res) => {
          this.setState({ product: res.data })
        })
      }
   
    render() {
        return (
            <div class="col d-flex justify-content-center">

            <Card  className="text-center" style={{ width: '18rem', backgroundColor:'beige'}} >
                <Card.Header  style={{backgroundColor:'beige',color:'chocolate'}}>
                <i className="fas fa-angle-right"></i><strong> ID: {this.state.product.productId} </strong> -  Product Detail
              
                </Card.Header>
                <Card.Body>
                    <Card.Title style={{color:'black'}}><i style={{color:'chocolate'}} class="far fa-address-card"></i><strong style={{color:'chocolate'}}> Name: </strong>{this.state.product.productName}</Card.Title>
                    <Card.Text style={{color:'black'}}><i style={{color:'chocolate'}} class="far fa-file-alt"></i><strong style={{color:'chocolate'}}> Discription: </strong>{this.state.product.productDiscription}</Card.Text>
                    <Card.Text style={{color:'black'}}><i style={{color:'chocolate'}} class="fas fa-money-bill"></i><strong style={{color:'chocolate'}}> UnitPrice: </strong> {this.state.product.productUnitPrice} $</Card.Text>
                    <Button variant="info"><i class="far fa-edit"></i> Update</Button>
                    <Button style={{ marginLeft: "20px"}} variant="danger"> <i class="far fa-trash-alt"></i> Delete</Button>
                </Card.Body>
            </Card>
            </div>
        );
    }
}

export default ViewProductComponent;
