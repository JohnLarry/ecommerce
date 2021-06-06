import React from "react";
import "./productsummary.css"

export const ProductsSummaryTab = () =>{

    return(
        <div className = "parent-tab">
            <div className = "square-container"><div className ="product-square"><img src ={"asset/image/category.png"}/></div><span>Product categories</span></div>
            <div className = "square-container"><div className ="popular-square"><img src ={"asset/image/popular.png"}/></div><span>Popular products</span></div>
            <div className = "square-container"><div className ="recommended-square"><img src ={"asset/image/recommended.png"}/></div><span >Recommended Product</span></div>
            <div className = "square-container"><div className ="shop-square"><img src ={"asset/image/entypo_shop.png"}/></div><span>Shop</span></div>
        </div>
    )
}