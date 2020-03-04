import React from 'react';
import { connect } from 'react-redux';
import "./UserProfile.css"

function UserProfile(props) {
    return (
        <div classNameName="card">
            <div className="card-body">
            <div className="row">
		                <div className="col-md-12">
		                    <h4>Your Orders Are Here</h4>
                            <div>Grand Total & Quantity : {props.grandTotal} & {props.totalQuantity}</div>
		                    <hr/>
		                </div>
		            </div>
            
                <div className="col-12">
                    <table className="table table-image">
                    <thead>
                        <tr>
                        <th scope="col">Product ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price/Each</th>
                        <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.selectedItems.map(item => {
                            return (<tr>
                                <td scope="row">{item.productID}</td>
                                <td className="w-25">
                                    <img src={item.imgUrl} className="img-fluid cart-image-width img-thumbnail" alt={item.name}/>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td>{item.itemTotalPrice}</td>
                            </tr>)
                            })
                        }
                    </tbody>
                    </table>  
                </div>
            </div>
            </div>
    )
}

const mapStatesToProps = (state) => ({
    selectedItems : state.cartList.selectedItems,
    grandTotal : state.cartList.grandTotal,
    totalQuantity: state.cartList.totalQuantity
});

const mapDispatchToProps = {
    
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);