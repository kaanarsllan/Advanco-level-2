import React, { Component } from "react";
import { connect } from "react-redux";
import { Table, Button } from "reactstrap";
class CartDetail extends Component {
  render() {
    return (
      <div>
        {" "}
        <Table>
          <thead>
            <tr>
              <th>id#</th>
              <th>title </th>
              <th>price</th>
              
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((cartItem) => (
              <tr>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.title}</td>
                <td>{cartItem.product.price}</td>
                

                <td> </td>
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
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(CartDetail);
