import { allProducts } from "../../Data/Products_datas";
import { ADDTOC } from "../actions/CheckoutAction";

const checkout = [
    //     {
    //     id:'surya',
    //     name:'8072009709',
    //     price:'299',
    //     img:'suryajoseph44@gmail.com'
    // }
    ]

const CheckoutReducer = (state = checkout, action) => {
    switch (action.type) {
        case ADDTOC:
            const b = allProducts.find(product => product.id === action.id);
            if (b) {
                const checkoutProduct = {
                    id: b.id,
                    name: b.name,
                    price: b.price,
                    img: b.img
                };
                const Checkout = checkoutProduct

                return Checkout;
            }
        default:
            return state;
        }
    }

export default CheckoutReducer;
