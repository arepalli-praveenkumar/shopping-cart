import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addItemToCart, updateQuantity } from "../../redux/actionTypes/cartActionTypes";
import { getProductByID, getProducts } from "../../redux/actionTypes/productsActionTypes"


class ProductViewComponent extends React.Component {
    

    componentDidMount() {
    }

    render () {
        const prodId = this.props.match.params.productId;
        const productsList = this.props.productsList;

        let current;
        productsList.map(i => {
            if (i.productID == prodId) {
                current = i;
            }
            
        })

        console.log(current)

        return (
        
            <div>
                <div className="card image-width">
                    <div >
                        <img className="card-img-top" src={current.imgUrl} alt="Shoes"/>
                    </div>
    
                    <div className="card-body">
                        <h5 className="card-title">{current.name}</h5>
                        <div className="card-text">Price : {current.price} {current.currency}</div>
                        <div className="card-text" >Brand : {current.brand}</div>
                        <div className="card-text" >Made in : {current.make}</div>
                        <div className="card-text" >Remarks : {current.remarks}</div>
                        {/* <button onClick={()=>this.props.updateQuantity()}>Update</button> */}
                        <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(current)}>Add to Cart</div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => ({
    ...state
   })
   
//    const mapDispatchToProps = (dispatch) => ({
//     addItemToCart : addItemToCart, 
//        getProductByID : dispatch(getProductByID)
//    })

const mapDispatchToProps = {
    addItemToCart, 
    getProductByID,
    getProducts,
    updateQuantity
   }
   

export default connect(mapStatesToProps, mapDispatchToProps)(ProductViewComponent);