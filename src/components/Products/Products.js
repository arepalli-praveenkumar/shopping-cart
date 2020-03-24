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
            <div className="container">
                <div className="row text-center text-lg-left">
                    {
                        prodList.map((prod, index) => {
                            return (
                                <div key={index}>
                                    <div className="card image-width">
                                    <NavLink to={`/product-view/${prod.productID}`}><div >
                                            <img className="card-img-top" src={prod.imgUrl} alt="Shoes"/>
                                        </div>
                                        </NavLink>
                        
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.name}</h5>
                                            <div className="card-text" >{prod.price}</div>
                                            <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(prod)}>Add to Cart</div>
                                        </div>
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