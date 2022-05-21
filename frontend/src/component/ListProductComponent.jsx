import React, { Component } from 'react'
import ProductService from '../services/ProductService'

class ListProductComponent extends Component {
  //constructro
  constructor(props) {
   
    super(props)

 
    this.state = {
      products: [],
    }

    //bind
    this.addProduct = this.addProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }


  addProduct() {
    this.props.history.push('/add-product/_add')
  }


  viewProduct(id) {
    this.props.history.push(`/view-product/${id}`);
  }


  updateProduct(id) {
    this.props.history.push(`/update-product/${id}`)
  }


  deleteProduct(id) {
    ProductService.deleteProduct(id).then((res) => {
      this.setState({
        products: this.state.products.filter(
          (product) => product.id !== id,
        ),
      })
    })
  }


  componentDidMount() {
    console.log('did mount çalıştı')
    ProductService.getProducts().then((res) => {
      this.setState({ products: res.data })
    })
  }

  render() {
    return (
    <div>

      <h2 className="text-center" >Product List</h2>
      <div className='container'>
          <div>
          <button className="btn btn-dark btn-sm" onClick={this.addProduct} style={{backgroundColor: "#B22222"}}>Add Product</button>
          </div>
     
      <br></br>
      <div className="row mb-3">
          <table className="table table-hover table-bordered" style={{backgroundColor:'beige',color:'chocolate'}}>
              <thead>
                  <tr>
                      <th style={{color:'black'}}>Id</th>
                      <th style={{color:'black'}}>Name</th>
                      <th style={{color:'black'}}>Discription</th>
                      <th style={{color:'black'}}>Unit Price</th>
                      <th style={{color:'black'}}>Arrangement</th>
                  </tr>
              </thead>
              <tbody>{
                  this.state.products.map(
                      product =>
                          <tr key={product.productId}>
                              <td>{product.productId}</td>
                              <td>{product.productName}</td>
                              <td>{product.productDiscription}</td>
                              <td>{product.productUnitPrice}</td>
                              <td>
                              <button onClick = { () => this.viewProduct(product.productId)} className="btn btn-info">View</button>
                                  <button style={{ marginLeft: "20px"}} onClick = { () => this.updateProduct(product.productId)} className="btn btn-info">Update</button>
                                  <button style={{ marginLeft: "20px"}} onClick = { () => this.deleteProduct(product.productId)} className="btn btn-danger">Delete</button>
                              </td>

                          </tr>
                  )



              }
              </tbody>

          </table>

      </div>
    </div>
      

  </div>
    )
  }
}

export default ListProductComponent