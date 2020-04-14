import React from 'react';
import { connect } from 'react-redux';
import { myOrders } from "../../redux/actionTypes/myOrdersActionTypes";
import { NavLink } from "react-router-dom";
import "./myOrders.css"

class UserProfile extends React.Component  {

    componentDidMount() {
        this.props.myOrders();
    }

    formatDate = (date) =>{
        return new Date(date);
    }
    render() {
    return (
        <div classNameName="orders-container">
            <h1>Your Orders</h1>
            {
                this.props.orderedList.map(orders => {
                    return (
                        <div className="">
                            <h2>Purchase Date : {`${new Date(orders.purchaseDate)}`}</h2>
                            {
                                orders.products.map(order => {
                                    return(
                                    <div className="order-list">
                                        <NavLink to={`/product-view/${order.productID}`}>
                                            <img src={order.imgUrl} className="order-img"/>
                                        </NavLink>
                                        <div className="single-order">
                                            <div className="ord-detail">
                                                <div className="lable">Name</div>
                                                <div className="value">{order.name}</div>
                                            </div>
                                            <div className="ord-detail">
                                                <div className="lable">Price</div>
                                                <div className="value currency">&#x20b9; {order.price}</div>
                                            </div>
                                            <div className="ord-detail">
                                                <div className="lable">Quantity</div>
                                                <div className="value">{order.quantity}</div>
                                            </div>
                                            <div className="ord-detail">
                                                <div className="lable">Total Price</div>
                                                <div className="value currency">&#x20b9; {order.itemTotalPrice}</div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    )
                    
                })
            }       
        </div>     
    )
  }
}

const mapStatesToProps = (state) => ({
    orderedList : state.orders.orderedList
});

const mapDispatchToProps = (dispatch) => {

    return {
        myOrders : () => dispatch(myOrders())
    }
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);