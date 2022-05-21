import React, { Component } from 'react';
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
                this.setState({productName: product.productName,
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
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input placeholder="Enter Product Name" name="productName" className="form-control"
                                                            value={this.state.productName} onChange={this.changeProductNameHandler} required />
                                        </div>
                                        <div className="form-group">
                                        <label>Product Discription:</label>
                                        <input placeholder="Enter Product Discription" name="productDiscription" className="form-control"
                                                            value={this.state.productDiscription} onChange={this.changeProductDiscriptionHandler} required />
                                        </div>
                                        <div className="form-group">
                                        <label>Product Unit Price:</label>
                                        <input placeholder="Enter Product Discription" name="productUnitPrice" className="form-control"
                                                            value={this.state.productUnitPrice} onChange={this.changeProductUnitPriceHandler} required />
                                    </div>
                                        <button className="btn btn-success" onClick={this.saveOrUpdateProduct} style={{ margin: "10px 0px 15px 5px"}}>Add</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={ {margin: "10px 10px 15px 5px"} }>Cancel</button>           
                                    </form>
                            </div>
                        </div>
                    </div>

               </div>
</div>
        );
    }

}
export default CreateProductComponent;