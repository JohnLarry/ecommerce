import React from 'react';
import "./search.css";

export const SearchProductName = () =>{

    return(
        <div className = "search-box">
            <input type ="text" placeholder = "Search " />
            <img src = {"asset/image/search-solid.svg"} />

        </div>
    )
}