import designerDress from '../images/designerdress.jpg';
import dungaree from '../images/Dungareedress.jpg';
import fullfrok from '../images/fullfrok.jpg';
import  GownSalvarsuit from '../images/GownSalvarsuit.jpg';
import MiniGown from '../images/MiniGown.jpg';
import Partywear from '../images/Partywear.jpg';
import Shiftdress from '../images/Shiftdress.jpg';
import Strapelesssuffleddress from '../images/strapelessufffleddress.jpg';
import Tshirtdress from '../images/TShirtdress.jpeg';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={designerDress} alt="Designer Dress" />
                <h3>Designer Dress</h3>
                <h3>$12,00</h3>
                <a onClick={() => props.addBasket('designerDress')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={dungaree} alt="Dungaree Dress" />
                <h3>Dungaree Dress</h3>
                <h3>$14,00</h3>
                <a onClick={() => props.addBasket('dungaree')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={fullfrok} alt="Red Full Frok" />
                <h3>Red Full Frok</h3>
                <h3>$35,00</h3>
                <a onClick={() => props.addBasket('fullfrok')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={GownSalvarsuit} alt="Gown Salvar suit" />
                <h3>Gown Salvar suit</h3>
                <h3>$33,00</h3>
                <a onClick={() => props.addBasket('GownSalvarsuit')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MiniGown} alt="MiniGown" />
                <h3>MiniGown</h3>
                <h3>$40,00</h3>
                <a onClick={() => props.addBasket('MiniGown')} className="addToCart cart5" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={ Partywear} alt=" Party wear" />
                <h3> Party wear</h3>
                <h3>$50,00</h3>
                <a onClick={() => props.addBasket(' Partywear')} className="addToCart cart6" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Shiftdress} alt="Shift Dress" />
                <h3>Shift Dress</h3>
                <h3>$38,00</h3>
                <a onClick={() => props.addBasket('Shiftdress')} className="addToCart cart7" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Strapelesssuffleddress} alt=" Red Strapeless Suffled Dress" />
                <h3>Red Strapeless Suffled Dress</h3>
                <h3>$70,00</h3>
                <a onClick={() => props.addBasket('Strapelesssuffleddress')} className="addToCart cart8" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Tshirtdress} alt="T-shirtdress" />
                <h3>T-shirtdress</h3>
                <h3>$39,00</h3>
                <a onClick={() => props.addBasket('Tshirtdress')} className="addToCart cart9" href="#">Add to Cart</a>
            </div>
            
        </div>
    );
}

export default connect(null, { addBasket })(Home);