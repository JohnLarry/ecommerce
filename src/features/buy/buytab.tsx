import React, {useState} from 'react';
import { Product } from '../product/product';
import { ProductsSummaryTab } from '../product/productsummarytab';
import {SearchProductLocation } from '../search/productsbylocation';
import {SearchProductName } from '../search/productsbyname';
import { Slider } from '../slider/carousel';

import "./buytab.css";
import "..//search/search.css"
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


export const Buytab = () =>{

   const [ active, setActive] = useState("more");
   const setActiveBottomTab = (tab:string) =>{
    switch(tab){
      case "home":
          return setActive("home");
          break;
           case "buy":
          return setActive("buy");
           break;
           case "deals":
          return setActive("deals");
           break;
          case "wallet":
          return setActive("wallet");
           break;
          case "more":
          return setActive("more");
           break;
          default:
          return setActive("home");
    }
      
   }
    return( <React.Fragment>
        <div className ="top-tabmenu">
            <div>
                <div className = "wrapper">
                    <img src = {"asset/image/ppoint.png"}/>
                    <SearchProductLocation/>
                </div>
            </div>
            <div className = "wrapper"><img src = {"asset/image/myorder.png"} /> <span>My Orders</span> </div>
            <div className = "wrapper" ><img className ="cart-icon" src = {"asset/image/cart.png"} /><span className ="cart-counter">5</span><span>Cart</span></div>
            </div>
        <SearchProductName/>

        <Slider/>
        <ProductsSummaryTab />
        <Product />
        <div className = "bottom-tabmenu">
           <div className =  {`  ${active ==="home"?"bottom-tabmenuitem-active":""} `}> <div className = "bottom-tabmenu-item"><img className = "bottom-tab-icon" src = {"asset/image/homeicon.png"}/><span>Home</span></div></div>
            <div className =  {`  ${active ==="buy"?"bottom-tabmenuitem-active":""} `}><div className = "bottom-tabmenu-item"><img className = "bottom-tab-icon" src = {"asset/image/buy.png"}/><span>Buy</span></div></div>
            <div className =  {`  ${active ==="deals"?"bottom-tabmenuitem-active":""} `}><div className = "bottom-tabmenu-item"><img className = "bottom-tab-icon" src = {"asset/image/deals.png"}/><span>Deals</span></div></div>
            <div className =  {`  ${active ==="wallet"?"bottom-tabmenuitem-active":""} `}><div className = "bottom-tabmenu-item" ><img className = "bottom-tab-icon" src = {"asset/image/wallet.png"}/><span>Wallet</span></div></div>
            <div className =  {`  ${active ==="more"?"bottom-tabmenuitem-active":""} `}><div className = "bottom-tabmenu-item"><img className = "bottom-tab-icon" src = {"asset/image/humburger.png"}/><span>More</span></div></div>
        </div>
        </React.Fragment>
    )
}
