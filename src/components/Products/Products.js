import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actionTypes/cartActionTypes";
import { NavLink } from "react-router-dom";
// import xx from "./Products.json";

// import w from "./images/w.jpg"
import "./Products.css"

class ProductsComponent extends React.Component {

    // addToCart = () => {
    //     console.log("Add to cart");
    // }

    constructor(props) {
        super(props);
    }

    //onClick={()=>this.productDetailedView(prod.id)}
    productDetailedView = (id) => {
        console.log(id)
        this.props.history.push(`/product-view/${id}`)
    }

    componentDidMount() {
        //console.log(xx)
    }

    render () {
        console.log(this.props);
        const prodList = this.props.productsList
        return (
            <div class="container page-top">
            <div class="row">
                {
                    prodList.map((prod, index) => {
                        return (
                        <div class="col-lg-3 col-md-4 col-xs-6 thumb" key={index}>
                        <NavLink to={`/product-view/${prod.productID}`}>
                        <img  src={prod.imgUrl} class="zoom img-fluid "  alt=""/>
                        </NavLink>
                        <div className="card-body product-card-body">
                            <h5 className="card-title">{prod.name}</h5>
                        <div className="card-text" >{prod.price} - {prod.currency}</div>
                            <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(prod)}>Add to Cart</div>
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
 ...state
})

const mapDispatchToProps =  {
    addItemToCart
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProductsComponent);