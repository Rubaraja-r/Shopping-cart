import designerDress from '../images/designerdress.jpg';
import dungaree from '../images/Dungareedress.jpg';
import MiniGown from '../images/MiniGown.jpg';
import Shiftdress from '../images/Shiftdress.jpg';
import Strapelesssuffleddress from '../images/strapelessufffleddress.jpg';
import Tshirtdress from '../images/TShirtdress.jpeg';
import CasualWear from '../images/causualwear.jpg';
import Miniskirt from '../images/Miniskirt.jpg';
import Summerwear from '../images/summer wear.jpg';
import Outingwear from '../images/Outing wear.jpg';
import Maxi  from '../images/Maxi.jpg';
import Jhunjhar from '../images/Jhunjhar.jpeg';
import Redtop from '../images/Red top.jpg';
import PartyWear from '../images/PartyWear.jpg'; 

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';

const Home = (props) => {
    console.log(props);
    return(
        <div className="container">
            <div className="image">
                <img src={Shiftdress} alt="Shift Dress" />
                <h3>Shift Dress</h3>
                <h3>$38,00</h3>
                <a onClick={() => props.addBasket('Shiftdress')} className="addToCart cart1" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={dungaree} alt="Dungaree Dress" />
                <h3>Dungaree Dress</h3>
                <h3>$14,00</h3>
                <a onClick={() => props.addBasket('dungaree')} className="addToCart cart2" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={MiniGown} alt="MiniGown" />
                <h3>MiniGown</h3>
                <h3>$40,00</h3>
                <a onClick={() => props.addBasket('MiniGown')} className="addToCart cart3" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={CasualWear} alt="Casual Wear" />
                <h3>Casual Wear</h3>
                <h3>$100,00</h3>
                <a onClick={() => props.addBasket('CasualWear')} className="addToCart cart4" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={designerDress} alt="Designer Dress" />
                <h3>Designer Dress</h3>
                <h3>$12,00</h3>
                <a onClick={() => props.addBasket('designerDress')} className="addToCart cart5" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Miniskirt} alt="Mini skirt" />
                <h3>Mini skirt</h3>
                <h3>$200,00</h3>
                <a onClick={() => props.addBasket('Miniskirt')} className="addToCart cart6" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Strapelesssuffleddress} alt=" Red Strapeless Suffled Dress" />
                <h3>Red Strapeless Suffled Dress</h3>
                <h3>$70,00</h3>
                <a onClick={() => props.addBasket('Strapelesssuffleddress')} className="addToCart cart7" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Outingwear } alt="Outing wear " />
                <h3>Outing wear </h3>
                <h3>$100,00</h3>
                <a onClick={() => props.addBasket('Outingwear ')} className="addToCart cart8" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Maxi} alt="Maxi" />
                <h3>Maxi</h3>
                <h3>$500,00</h3>
                <a onClick={() => props.addBasket('Maxi')} className="addToCart cart9" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Jhunjhar} alt=" Jhunjhar" />
                <h3>Jhunjhar</h3>
                <h3>$700,00</h3>
                <a onClick={() => props.addBasket('Jhunjhar')} className="addToCart cart10" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Redtop} alt="Red top" />
                <h3>Red top</h3>
                <h3>$300,00</h3>
                <a onClick={() => props.addBasket('Redtop')} className="addToCart cart11" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Tshirtdress} alt="T-shirtdress" />
                <h3>T-shirtdress</h3>
                <h3>$39,00</h3>
                <a onClick={() => props.addBasket('Tshirtdress')} className="addToCart cart12" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={Summerwear} alt="Summer wear" />
                <h3>Summer wear</h3>
                <h3>$90,00</h3>
                <a onClick={() => props.addBasket('Summer wear')} className="addToCart cart13" href="#">Add to Cart</a>
            </div>
            <div className="image">
                <img src={PartyWear} alt="Party Wear" />
                <h3>Party Wear</h3>
                <h3>$100,00</h3>
                <a onClick={() => props.addBasket('PartyWear')} className="addToCart cart14" href="#">Add to Cart</a>
            </div>

            
        </div>
    );
}

export default connect(null, { addBasket })(Home);