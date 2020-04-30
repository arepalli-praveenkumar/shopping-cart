import React from 'react';
import { connect } from 'react-redux';
import { myOrders } from "../../redux/actionTypes/myOrdersActionTypes";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faSadTear } from '@fortawesome/free-solid-svg-icons'
import "./myOrders.css"

class UserProfile extends React.Component  {

    constructor(props) {
        super(props)

        this.state = {
            activeEle : null
        }
    }

    componentDidMount() {
        this.props.myOrders();
    }

    formatDate = (date) =>{
        return new Date(date);
    }

    myGoggle = (index) => {
        console.log(index);
        if (this.state.activeEle === index) {
            this.setState({activeEle : null});
        } else {
            this.setState({activeEle : index});
        }
        
    }
    render() {

        let ordersList = 
        (this.props.loading) ? <Spinner/> :
            (!this.props.loading && this.props.orderedList.length === 0) ?
            <div className="empty-cart">
                        <h1 className="text-center">
                          <span>Sorry <FontAwesomeIcon icon={faSadTear}/></span>
                          <span>.You didn't bought any item.</span>
                        </h1>
                        <NavLink to={`/products`}>Explore More</NavLink>
                    </div>
            : this.props.orderedList.map((orders, index )=> {
                    return (
                        <div className="order-section" key={index}>
                            <FontAwesomeIcon icon={faChevronRight}/>
                            <p onClick={()=>this.myGoggle(index)}>
                                Purchase Date : {`${new Date(orders.purchaseDate).toLocaleString()}`}</p>
                            {
                                orders.products.map((order, ordInd) => {
                                    return(
                                        <div key={ordInd} className={(this.state.activeEle === index) ? "activeOrder": "inactiveOrd"}>
                                    <div className="order-list" >
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
                                    </div>
                                    )
                                })
                            }
                        </div>
                    )
                    
                })

        


    return (
        <div className="orders-container">
            <h1>Your Orders</h1>
            {ordersList}
        </div>     
    )
  }
}

const mapStatesToProps = (state) => ({
    orderedList : state.orders.orderedList,
    loading : state.loadingReducer.loading,
});

const mapDispatchToProps = (dispatch) => {

    return {
        myOrders : () => dispatch(myOrders())
    }
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);