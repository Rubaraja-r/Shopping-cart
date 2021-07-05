import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import designerDress from '../images/designerdress.jpg';
import dungaree from '../images/Dungareedress.jpg';
import MiniGown from '../images/MiniGown.jpg';
import Shiftdress from '../images/Shiftdress.jpg';
import Strapelesssuffleddress from '../images/strapelessufffleddress.jpg';
import Tshirtdress from '../images/TShirtdress.jpeg';
import Miniskirt from '../images/Miniskirt.jpg';
import Summerwear from '../images/summer wear.jpg';
import Outingwear from '../images/Outing wear.jpg';
import Maxi from '../images/Maxi.jpg';
import Jhunjhar from '../images/Jhunjhar.jpeg';
import Redtop from '../images/Red top.jpg';
import CasualWear from '../images/causualwear.jpg';
import PartyWear from '../images/PartyWear.jpg';



function Cart({basketProps, productQuantity, clearProduct}) {
    console.log(basketProps);

    let productsInCart = [];

    Object.keys(basketProps.products).forEach( function(item) {
        console.log(item);
        console.log(basketProps.products[item].inCart);
        if(basketProps.products[item].inCart) {
            productsInCart.push(basketProps.products[item])
        }
        console.log(productsInCart);
    });

   
    const productImages = (product) => {
          if( product.tagName === 'designerDress') {
            return designerDress;
        } else if(product.tagName === 'dungaree ') {
            return dungaree ;
        }
          else if(product.tagName === 'MiniGown') {
            return MiniGown;
        }
          else if(product.tagName === 'Shiftdress') {
            return Shiftdress;
        }
          else if(product.tagName === 'Strapelesssuffleddress') {
            return Strapelesssuffleddress;
        }
          else if(product.tagName === 'Tshirtdress') {
            return Tshirtdress;
          }
          else if(product.tagName === 'CasualWear') {
            return CasualWear;
        }
          else if(product.tagName === 'Miniskirt') {
            return Miniskirt;
        }
          else if(product.tagName === 'Summerwear ') {
            return Summerwear ;
        }
        else if(product.tagName === 'Outingwear') {
            return Outingwear ;
        }
        else if(product.tagName === 'Maxi') {
            return Maxi ;
        }
        else if(product.tagName === 'Jhunjhar ') {
            return Jhunjhar;
        }
        else if(product.tagName === 'Redtop') {
            return Redtop ;
        }
        else if(product.tagName === 'PartyWear') {
            return PartyWear;
        }
    }

    productsInCart = productsInCart.map( (product, index) => {
        console.log("My product is");
        console.log(product);
        return (
            <Fragment key={index}>
            
                <div className="product"><ion-icon onClick={() => clearProduct(product.tagName)} name="close-circle"></ion-icon><img src={productImages(product)} />
                    <span className="sm-hide">{product.name}</span>
                </div>
                <div className="price sm-hide">${product.price},00</div>
                <div className="quantity">
                    <ion-icon onClick={() => productQuantity('decrease', product.tagName)} className="decrease" name="arrow-back-circle-outline"></ion-icon>
                        <span>{product.numbers}</span>
                    <ion-icon onClick={() => productQuantity('increase', product.tagName)} className="increase" name="arrow-forward-circle-outline"></ion-icon>   
                </div>
                <div className="total">${product.numbers * product.price},00</div>
            </Fragment>
        )
    });

    return (
        <div className="container-products">
            <div className="product-header">
                <h5 className="product-title">PRODUCT</h5>
                <h5 className="price sm-hide">PRICE</h5>
                <h5 className="quantity">QUANTITY</h5>
                <h5 className="total">TOTAL</h5>
            </div>
            <div className="products">
                { productsInCart }
            </div>
            <div className="basketTotalContainer">
                <h4 className="basketTotalTitle">Basket Total</h4>
                <h4 className="basketTotal">{basketProps.cartCost},00</h4>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    basketProps: state.basketState
});


export default connect(mapStateToProps, { productQuantity, clearProduct } )(Cart);