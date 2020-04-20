import React from 'react';
import { connect } from 'react-redux';
import { 
    updateQuantity, 
    decrementQuantity, 
    increamentQuantity, 
    orderItems } from "../../redux/actionTypes/cartActionTypes";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Cart.css"
class CartComponent extends React.Component {

    updateQnty(event, productID) {
        console.log(event.target.value);
        let newQuantity = event.target.value
        this.props.updateQuantity(newQuantity, productID)
    }

    incrementQnty = (item) => {
        if (item.quantity >= 0) {
            this.props.increamentQuantity(item.productID);
        } else {
            return null;
        }
        
    }

    decrementQnty = (item) => {
        if (item.quantity === 0) {
            return null;
        } else {
            this.props.decrementQuantity(item.productID);
        }
    }

    ordetItems = () => {
        let user = JSON.parse(sessionStorage.getItem("user"));
        let buyProducts = {
            userID : user.id,
            products : this.props.selectedItems,
            grandTotal : this.props.grandTotal,
            totalQnty: this.props.totalQuantity

        };
        this.props.orderItems(buyProducts);
        //this.props.history.push("/my-profile/my-orders");
    }

    render () {

        const ordersList = 
        <div>
        <p className="total-price-qnty">Grand Total & Quantity : &#x20b9; {this.props.grandTotal} & {this.props.totalQuantity}</p>
            
                <div className="col-12">
                    <table className="table table-image">
                    <thead>
                        <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        {/* <th scope="col">New Quantity</th> */}
                        <th scope="col">Price/Each</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.selectedItems.map(item => {
                            return (<tr>
                                <td scope="row">{item.productID}</td>
                                <td className="w-25">
                                    <NavLink to={`/product-view/${item.productID}`}>
                                     <img src={item.imgUrl} className="img-fluid cart-image-width img-thumbnail"
                                      alt={item.name}/>
                                    </NavLink>
                                </td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={()=>this.incrementQnty(item)}>+</button>{item.quantity}
                                    <button onClick={()=>this.decrementQnty(item)}>-</button>
                                </td>
                                {/* <td> 
                                    <input type="text" onChange={(event)=>this.updateQnty(event, item.productID)}/>
                                </td> */}
                                <td>&#x20b9; {item.price}</td>
                                <td>&#x20b9; {item.itemTotalPrice}</td>
                            </tr>)
                            })
                        }
                    </tbody>
                    </table>  
                    <button className="my-btn" onClick={this.ordetItems}>Buy Now</button>
                </div>
                </div>

        return (

        <div className="cart-page">
            <div className="cart-body">
                {
                    (this.props.selectedItems.length > 0) ? {ordersList}
                    
                    : <div className="empty-cart">
                        <h1 className="text-center"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Empty Cart. </h1>
                        <NavLink to={`/products`}>Explore More</NavLink>
                    </div>
                }
            
            </div>
        </div>
                        
        )
    }
}

const mapStatesToProps = (state) => ({
    selectedItems : state.cartList.selectedItems,
    grandTotal : state.cartList.grandTotal,
    totalQuantity: state.cartList.totalQuantity
});

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity : () => dispatch(updateQuantity()),
        decrementQuantity : (id) => dispatch(decrementQuantity(id)),
        increamentQuantity : (id) => dispatch(increamentQuantity(id)),
        orderItems : (data) => dispatch(orderItems(data))
    }
    
};

export default connect(mapStatesToProps,mapDispatchToProps)(CartComponent);