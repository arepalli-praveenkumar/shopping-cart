import React from 'react';
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actionTypes/cartActionTypes";
import { getAllProducts } from "../../redux/actionTypes/productsActionTypes";
import { savePrdToWishListDB, getWishListFromDB } from "../../redux/actionTypes/wishListActions"
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./Products.css"

class ProductsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    
    productDetailedView = (id) => {
        console.log(id)
        this.props.history.push(`/product-view/${id}`)
    }

    addToWishList = (prod) => {
        //alert("Work In Progres...!");
        let reqBody = {};
        reqBody.userID = 23;
        reqBody.product = prod;

        this.props.savePrdToWishListDB(reqBody);
    }

    componentDidMount() {
        this.props.getAllProducts();
        this.props.getWishListFromDB();
    }

    render () {
        console.log(this.props);
        const prodList = this.props.productsList.products
        return (
            <div className="prod-main-container">
                { this.props.loading ?  <Spinner/>:<div/>} 
                <div className="list ">
                {
                    prodList.map((prod, index) => {
                        return (
                            <div className="prod-first" key={prod.productID}>
                                <div className="wishicon" onClick={()=>this.addToWishList(prod)}>
                                    <FontAwesomeIcon icon={faHeart} size="2x"/>
                                </div>
                                <div className="image-block">
                                    <NavLink to={`/product-view/${prod.productID}`}>
                                        <img src={prod.imgUrl} className="img-fluid fadeInUp"  alt=""/>
                                    </NavLink>
                                </div>
                                <div className="prod-second fadeInUp">
                                    <h5 title={prod.name}>{prod.name}</h5>
                                    <div className="price-tag">&#x20b9; {prod.price}</div>
                                    <div className="cart-btn" onClick={()=>this.props.addItemToCart(prod)}>Add to Cart</div>
                                </div>
                            </div>
                        )
                    })
                }
                </div>  
           </div>
           
        )
    }
}

const mapStatesToProps = (state) => ({
 ...state,
 loading : state.loadingReducer.loading,
 wishList : state.wishList.list
})

const mapDispatchToProps =  (dispatch) => {
    return {
        addItemToCart : (prod) => dispatch(addItemToCart(prod)),
        getAllProducts : () => dispatch(getAllProducts()),
        savePrdToWishListDB : (data) => dispatch(savePrdToWishListDB(data)),
        getWishListFromDB : () => dispatch(getWishListFromDB())
    }
    
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProductsComponent);