import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Table ,Button} from "reactstrap";
import './product.css'
import alertify from "alertifyjs"

import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart=(product) =>{
    this.props.actions.addToCart({quantity:1,product})
    alert(product.title + "sepete eklendi")
  }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>id#</th>
              <th>title </th>
              <th>price</th>
              <th>category</th>
              <th>description</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr>
                <th scope="row">{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <img src={product.image} alt="" / >
                  <td> <Button color="success" onClick={()=>this.addToCart(product)} > Add to cart</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
