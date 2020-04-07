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
        <div classNameName="card">
            <div className="card-body">
            <div className="row">
                <div className="col-md-12">
                    <h4>Your Orders Are Here</h4>
                    <div>Grand Total & Quantity : {this.props.grandTotal} & {this.props.totalQuantity}</div>
                    <hr/>
                </div>
		    </div>

            
            
                <div className="col-12">
                    {
                        this.props.orderedList.map(orders => {
                            return(
                            <div>
                            <div className="row">Purchase Date : {orders.purchaseDate}</div>
                            <div className="row">
                            <table className="table table-image">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Image</th> 
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Price/Each</th>
                                    <th>Total</th>
                                    </tr>
                                </thead>
                                {
                                    orders.products.map(order => {
                                        return(
                                            <tr>
                                                <td scope="row">{order.productID}</td>
                                                <td className="w-25">
                                                    <NavLink to={`/product-view/${order.productID}`}>
                                                        <img src={order.imgUrl} className="img-fluid cart-image-width img-thumbnail"
                                                        alt={order.name}/>
                                                    </NavLink>
                                                </td>
                                                <td>{order.name}</td>
                                                <td>{order.quantity}</td>
                                                <td>{order.price}</td>
                                                <td>{order.itemTotalPrice}</td>
                                            </tr> 
                                        )
                                    })
                                }
                            </table>
                            </div>
                            </div>)
                        })
                    }
                </div>
            </div>
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