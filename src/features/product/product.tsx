import React from "react";
import "./product.css";
export const Product = () =>{
    return(
        
        <div className = "product-container">
            <div ><img src = {"asset/image/prod1.png"}/></div>
            <div className = "product-details-container">
            <div className = "product-description"><span>Free sample small tote bag gucci fen...</span></div>
            <div className = "product-price"><span>₦900 - ₦1,500</span></div>
            <div className = "product-quantity"><span>MOQ 4 (pieces)</span></div>
            </div>
        </div>
        
    )
}