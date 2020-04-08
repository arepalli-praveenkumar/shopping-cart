import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addItemToCart, getAllProducts } from "../../redux/actionTypes/cartActionTypes";
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
        this.props.getAllProducts();
    }

    render () {
        console.log(this.props);
        const prodList = this.props.productsList.products
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
                                <div class="row">
                                    <div class="col">
                                        <p class="btn btn-danger btn-block">Rs {prod.price}</p>
                                    </div>
                                    <div class="col">
                                    <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(prod)}>Add to Cart</div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                //     <div class="col-12 col-md-6 col-lg-4">
                //     <div class="card">
                //     <NavLink to={`/product-view/${prod.productID}`}>
                //         <img class="card-img-top" src={prod.imgUrl} alt={prod.name}/></NavLink>
                //         <div class="card-body">
                //             <h4 class="card-title"><a href="product.html" title="View Product">{prod.name}</a></h4>
                //             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                //             <div class="row">
                //                 <div class="col">
                //                     <p class="btn btn-danger btn-block">{prod.price} Rs</p>
                //                 </div>
                //                 <div class="col">
                //                     <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(prod)}>Add to Cart</div>
                //                     {/* <a href="#" class="btn btn-success btn-block" onClick={()=>this.props.addItemToCart(prod)}>Add to cart</a> */}
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
                
                
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

const mapDispatchToProps =  (dispatch) => {
    return {
        addItemToCart : (prod) => dispatch(addItemToCart(prod)),
        getAllProducts : () => dispatch(getAllProducts())
    }
    
}

export default connect(mapStatesToProps, mapDispatchToProps)(ProductsComponent);