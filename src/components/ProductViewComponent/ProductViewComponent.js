import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";
import { addItemToCart, updateQuantity } from "../../redux/actionTypes/cartActionTypes";
import { getProductByID, getProducts } from "../../redux/actionTypes/productsActionTypes"


class ProductViewComponent extends React.Component {
    

    componentDidMount() {
        const prodId =  this.props.match.params.productId;
        this.props.getProductByID(prodId);
    }

    render () {
        const prodId = this.props.match.params.productId;
        const current = this.props.viewList.find(item => item.productID === prodId);
        console.log(current);
        //TODO FIX

        return (
        
            <div>
                <div className="card image-width">
                    {
                        !this.props.loading ?
                        <div>
                        <div >
                        <img className="card-img-top" src={current.imgUrl} alt="Shoes"/>
                    </div>
    
                    <div className="card-body product-card-body">
                        <h5 className="card-title">{current.name}</h5>
                        <div className="card-text">Price : {current.price} {current.currency}</div>
                        <div className="card-text" >Brand : {current.brand}</div>
                        <div className="card-text" >Made in : {current.make}</div>
                        <div className="card-text" >Remarks : {current.remarks}</div>
                       <div className="btn btn-primary" onClick={()=>this.props.addItemToCart(current)}>Add to Cart</div>
                    </div></div> : "...Loading"
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
        addItemToCart, 
        getProductByID : (id)=>dispatch(getProductByID(id)),
    }
    
   }
   

export default connect(mapStatesToProps, mapDispatchToProps)(ProductViewComponent);