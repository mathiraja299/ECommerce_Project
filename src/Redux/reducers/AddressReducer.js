import { allProducts } from "../../Data/Products_datas";
import { ADDRESS, DELETEADD } from "../actions/AddressAction";

const address = [
  {
    "addressType": "Home",
    "firstName": "Surya",
    "lastName": "Joseph",
    "email": "suryajoseph44@gmal.com ",
    "company": "Techno",
    "address1": "Add1",
    "address2": "Add2",
    "country": "India",
    "state": "Tamilnadu",
    "city": "Cuddalore",
    "postalCode": "608301",
    "mobileNumber": "8072009709",
    "landmark": "Post office opp"
}
]
 
const Addressreducer = (state = address, action) => {   
  switch (action.type) {
    case ADDRESS:
        return [...state,action.key]; // Use the spread operator to add all items from action.data    
    
    case DELETEADD:
     return state.filter((item, index) => index !== action.index);
            
    default:
        return state;
    }
  };
  
  export default Addressreducer;