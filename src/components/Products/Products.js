import React from 'react';
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actionTypes/cartActionTypes";
import { getAllProducts } from "../../redux/actionTypes/productsActionTypes";
import { NavLink } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import "./Products.css"

class ProductsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    
    productDetailedView = (id) => {
        console.log(id)
        this.props.history.push(`/product-view/${id}`)
    }

    componentDidMount() {
        this.props.getAllProducts();
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
                            <div className="prod-first fadeInUp trans" key={prod.productID}>
                                <div className="image-block">
                                    <NavLink to={`/product-view/${prod.productID}`}>
                                        <img src={prod.imgUrl} className="img-fluid"  alt=""/>
                                    </NavLink>
                                </div>
                                <div className="prod-second">
                                    <h5>{prod.name}</h5>
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
})

const mapDispatchToProps =  (dispatch) => {
    return {
        addItemToCart : (prod) => dispatch(addItemToCart(prod)),
        getAllProducts : () => dispatch(getAllProducts())
    }
    
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProductsComponent);