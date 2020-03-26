import React from 'react';
import { connect } from 'react-redux';
import { updateQuantity } from "../../redux/actionTypes/cartActionTypes";
import { NavLink } from "react-router-dom";
import "./Cart.css"
class CartComponent extends React.Component {

    updateQnty(event, productID) {
        console.log(event.target.value);
        let newQuantity = event.target.value
        this.props.updateQuantity(newQuantity, productID)
    }
    render () {
        return (
            
        <div className="container cart-container">
            <div className="">
            <div>Grand Total & Quantity : {this.props.grandTotal} & {this.props.totalQuantity}</div><br/>
            
                <div className="col-12">
                    <table className="table table-image">
                    <thead>
                        <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">New Quantity</th>
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
                                <td>{item.quantity}</td>
                                <td> 
                                    <input type="text" onChange={(event)=>this.updateQnty(event, item.productID)}/>
                                </td>
                                <td>{item.price} - {item.currency}</td>
                                <td>{item.itemTotalPrice}</td>
                            </tr>)
                            })
                        }
                    </tbody>
                    </table>  
                    <div>Grand Total : {this.props.grandTotal}</div> 
                    <div>Grand Quantity : {this.props.totalQuantity}</div>
                </div>
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

const mapDispatchToProps = {
    updateQuantity
};

export default connect(mapStatesToProps,mapDispatchToProps)(CartComponent);