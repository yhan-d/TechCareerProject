import React, { Component } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import ProductService from '../services/ProductService';

class CreateProductComponent extends Component {
   constructor(props){
       super(props)

       this.state ={
            id: this.props.match.params.id,
            productName:'',
            productDiscription:'',
            productUnitPrice:'',
       }

       this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
       this.changeProductDiscriptionHandler = this.changeProductDiscriptionHandler.bind(this);
       this.changeProductUnitPriceHandler = this.changeProductUnitPriceHandler.bind(this);
       this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }


    componentDidMount(){

        
        if(this.state.id === '_add'){
            return
        }else{
            ProductService.getProductById(this.state.id).then( (res) =>{
                let product = res.data;
                this.setState({
                    productName: product.productName,
                    productDiscription: product.productDiscription,
                    productUnitPrice : product.productUnitPrice
                });
            });
        } 
            
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {productName: this.state.productName, productDiscription: this.state.productDiscription, productUnitPrice: this.state.productUnitPrice};
        console.log('product => ' + JSON.stringify(product));

      
        if(this.state.id === '_add'){
            ProductService.createProduct(product).then(res =>{
                this.props.history.push('/products');
            });
        }else{
            ProductService.updateProduct(product, this.state.id).then( res => {
                this.props.history.push('/products');
            });
        }
    }

       changeProductNameHandler = (event) => {
            this.setState({ productName: event.target.value });
            }
        changeProductDiscriptionHandler = (event) => {
            this.setState({ productDiscription: event.target.value });
        }
        changeProductUnitPriceHandler = (event) => {
            this.setState({ productUnitPrice: event.target.value });
        }

        cancel(){
            this.props.history.push('/products')
        }

        getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Product</h3>
        }else{
             return <h3 className="text-center">Update Product</h3>
            }
        }
   
    render() {
        return (
            <div class="col d-flex justify-content-center">

            <Card  className="text-center" style={{ height: '25rem', width: '25rem', backgroundColor:'beige' , margin:'150px'}} >
                <Card.Header  style={{backgroundColor:'beige',color:'chocolate'}}> {this.getTitle()}
                </Card.Header>
                <Card.Body>
                    <Form style={{color:'chocolate'}}>
                        <Form.Group className="mb-3" >
                            <Form.Label >Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name" defaultValue={this.state.productName} onChange={this.changeProductNameHandler} required/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Product Discription</Form.Label>
                            <Form.Control type="text" placeholder="Discription" defaultValue={this.state.productDiscription} onChange={this.changeProductDiscriptionHandler} required/>
                        </Form.Group>
                        
                        <Form.Group className="mb-3" >
                            <Form.Label>Unit Price</Form.Label>
                            <Form.Control type="text" placeholder="Unit Price" defaultValue={this.state.productUnitPrice} onChange={this.changeProductUnitPriceHandler} required/>
                        </Form.Group>

                        <Button type='submit' variant="success" onClick={this.saveOrUpdateProduct}> <i class="fas fa-check"></i> Add</Button>
                        <Button style={{ marginLeft: "20px"}} variant="danger" onClick={this.cancel.bind(this)}> <i class="far fa-trash-alt"></i> Cancel</Button>
                        </Form>
                </Card.Body>
            </Card>
            </div>

        );
    }

}
export default CreateProductComponent;