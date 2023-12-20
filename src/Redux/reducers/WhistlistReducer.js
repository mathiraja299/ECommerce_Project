import { allProducts } from "../../Data/Products_datas";
import { ADDTOWISHT, REMOVEFROMWISHT } from "../actions/WhistlistAction";

const Whistlist = [
//     {
//     id:'surya',
//     name:'8072009709',
//     price:'299',
//     img:'suryajoseph44@gmail.com'
// }
]
 
const WhistlistReducer = (state = Whistlist, action) => {   
  switch (action.type) {
    case ADDTOWISHT:
        const a = allProducts.find(product => product.id === action.id)
        const newObj ={
            id:a.id,
            name:a.name,
            price:a.price,
            img:a.img,    
            offer: a.off,
        
        }
        
       return [...state,newObj] 
    
      case REMOVEFROMWISHT:
        const deleteIndex = state.findIndex(item => item.id === action.id);
   
        if (deleteIndex !== -1) {
          return [
              ...state.slice(0, deleteIndex),
              ...state.slice(deleteIndex + 1)
          ];
      }
       
    default:
      return state;
  }
};

export default WhistlistReducer;
