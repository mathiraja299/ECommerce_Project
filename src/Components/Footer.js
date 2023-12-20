import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from "../Pages/Shoping_cart";
import Home from "../Pages/Home";

// image importing section
import Logo_text2 from '../Assets/Logo_text.png'
import logo from '../Assets/Logo.png'
import payment from '../Assets/img/payment.png'



export default function Footer(params) {
    return (
        <>
        
        <div className="bg-dark p-2 mt-5" >
    <div className="container">
    <div className="row">
        <div className="col-sm-3 mt-5">
            <div className="card border-0 bg-dark ">
            <img src={logo} className='' width={"22%"}/>
            <div>
                <a href='#' className="mx-5" style={{textDecoration:'none'}} ><h4 className="text-white" style={{marginTop:'-27.5%',marginLeft:'24%'}}>Womens Dayz</h4></a><br/>
                <a href='#' className="mx-5"><img src={Logo_text2} style={{marginTop:'-26%',marginLeft:'6%'}}/></a>
            </div>
            <div className="" style={{color:'#8f8c8c'}}>
            <p className="me-2">No: 15, Krishna Kandha Building,, SA Garden,Saravanampatti, Coimbatore, Tamil Nadu 641026</p>
            <p>1-202-555-0106<br/>help@shopper.com</p>
            </div>
            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
                <h4 className="mt-3 text-white">SUPPORTS</h4>
                <div className="mt-5" style={{color:'#8f8c8c'}}>
                <p>Contact Us</p>
                <p>About Us</p>
                <p>Size Guide</p>
                <p>Shipping & Returns</p>
                <p>FAQ</p>
                </div>


            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">SHOP</h4>
            <div  className="mt-5" style={{color:'#8f8c8c'}}>
                <p>Men's Shopping</p>
                <p>Women's Shopping</p>
                <p>Kids's Shopping</p>
                <p>Furniture</p>
                <p>Discounts</p>
                </div>

            </div>

        </div>
        <div className="col-sm-2 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">COMPANY</h4>
            <div className="mt-5" style={{color:'#8f8c8c'}}>
                <p>About</p>
                <p>Blog</p>
                <p>Affiliate</p>
                <p>Login</p>
                </div>

            </div>

        </div>
        <div className="col-sm-3 mt-4">
            <div className="card border-0 bg-dark">
            <h4 className="mt-3 text-white">SECURE PAYMENTS</h4>
            <img src={payment} width={'80%'} className="mt-5"/>

            </div>

        </div>
    </div>
    <hr/>

  </div>
  </div>

   
        </>
    )
}