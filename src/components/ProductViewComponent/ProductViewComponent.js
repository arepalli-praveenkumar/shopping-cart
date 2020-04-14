import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addItemToCart, updateQuantity } from "../../redux/actionTypes/cartActionTypes";
import { getProductByID, getProducts } from "../../redux/actionTypes/productsActionTypes"
import './productView.css'

class ProductViewComponent extends React.Component {
    

    componentDidMount() {
        const prodId =  this.props.match.params.productId;
        this.props.getProductByID(prodId);
    }

    render () {
        const prodId = this.props.match.params.productId;
        const viewList = this.props.viewList;
      

        return (
        <div className="prd-view-container">
            <div className="prod-details">
                {
                    viewList.map(item => {
                        if (item.productID == prodId) {
                            return (
                                <div className="item-body" key={item.productID}>
                                    <div className="prd-pic">
                                        <img className="card-img-top" src={item.imgUrl} alt="Shoes"/>
                                    </div>
                                    <div className="prd-spec">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div className="card-text">Price : &#x20b9; {item.price}</div>
                                    <div className="card-text" >Brand : {item.brand}</div>
                                    <div className="card-text" >Made in : {item.make}</div>
                                    <div className="card-text" >Remarks : {item.remarks}</div>
                                    <div className="view-cart-btn" onClick={()=>this.props.addItemToCart(item)}>Add to Cart</div>

                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            </div>
        )
    }
}

const mapStatesToProps = (state) => ({
    ...state,
    viewList : state.productsList.viewList,
    loading : state.loadingReducer
})
   

const mapDispatchToProps = (dispatch)=>{
    return {
        addItemToCart: (item) => dispatch(addItemToCart(item)), 
        getProductByID : (id)=>dispatch(getProductByID(id)),
    }
    
   }
   

export default connect(mapStatesToProps, mapDispatchToProps)(ProductViewComponent);