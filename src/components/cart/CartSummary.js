import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,Badge
} from "reactstrap";
import {Link} from "react-router-dom"
class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Cart is Empty</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Sepet
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>{cartItem.product.title}<Badge color="success">{cartItem.quantity}</Badge></DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to={"/cart"}>Go to Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}{" "}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps)(CartSummary);
