import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from '../actions/types';
const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        designerDress: {
            name: "Designer Dress",
            tagName: 'designerDress',
            price: 12.00 ,
            numbers: 0,
            inCart: false
        },
        dungaree : {
            name: "Dungaree Dress",
            tagName: 'dungaree',
            price: 35.00,
            numbers: 0,
            inCart: false
        },
        MiniGown: {
            name: "MiniGown",
            tagName: 'MiniGown',
            price: 40.00,
            numbers: 0,
            inCart: false
        },
        Strapelesssuffleddress: {
            name: "Red Strapeless Suffled Dress",
            tagName: 'Strapelesssuffleddress',
            price: 70.00,
            numbers: 0,
            inCart: false
        },
        PartyWear: {
            name: "Party Wear",
            tagName: 'PartyWear',
            price: 100.00,
            numbers: 0,
            inCart: false
        },
        Shiftdress: {
            name: "Shift Dress",
            tagName: 'Shiftdress',
            price: 38.00,
            numbers: 0,
            inCart: false
        },
        Tshirtdress: {
            name: "T-shirtdress",
            tagName: 'Tshirtdress',
            price: 39.00,
            numbers: 0,
            inCart: false
        },
        CasualWear: {
            name: "Casual Wear",
            tagName: 'CasualWear',
            price: 100.00,
            numbers: 0,
            inCart: false
        },
        Miniskirt: {
            name: "Mini skirt",
            tagName: 'Miniskirt',
            price: 200.00,
            numbers: 0,
            inCart: false
        },
        Summerwear: {
            name: "Summer wear",
            tagName: 'Summerwear',
            price: 90.00,
            numbers: 0,
            inCart: false
        },
        Jhunjhar: {
            name: " Jhunjhar",
            tagName: ' Jhunjhar',
            price: 700.00,
            numbers: 0,
            inCart: false
        },
        Outingwear: {
            name: "Outing wear",
            tagName: 'Outingwear',
            price: 100.00,
            numbers: 0,
            inCart: false
        },
        Maxi: {
            name: "Maxi",
            tagName: 'Maxi',
            price: 500.00,
            numbers: 0,
            inCart: false
        },
        Redtop: {
            name: "Red top",
            tagName: 'Redtop',
            price: 300.00,
            numbers: 0,
            inCart: false
        },
        
    

    }
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload]}
            
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        case INCREASE_QUANTITY:
                                    // state.products['blackTshirt']            
            productSelected = { ...state.products[action.payload]}
            productSelected.numbers += 1;
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case DECREASE_QUANTITY:
            productSelected = { ...state.products[action.payload]};
            let newCartCost = 0;
            let newBasketNumbers = 0;
            if( productSelected.numbers === 0) {
                productSelected.numbers = 0;
                newCartCost = state.cartCost
                newBasketNumbers = state.basketNumbers
            } else {
                productSelected.numbers -= 1;
                newCartCost = state.cartCost - state.products[action.payload].price
                newBasketNumbers = state.basketNumbers - 1
            }
            
            return {
                ...state,
                basketNumbers: newBasketNumbers,
                cartCost: newCartCost,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        case CLEAR_PRODUCT: 
            productSelected = { ...state.products[action.payload]};
            let numbersBackup = productSelected.numbers;
            productSelected.numbers = 0;
            productSelected.inCart = false;
            return {
                ...state,
                basketNumbers: state.basketNumbers - numbersBackup,
                cartCost: state.cartCost - ( numbersBackup * productSelected.price ),
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
        default:
            return state;
    }
}