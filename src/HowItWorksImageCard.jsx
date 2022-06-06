// import pic from "./images/HowItWorks.png"
import pic from "./images/rewardsImage.png"
import pic2 from './images/how.jpg'
import './css/howItWorksImageCard.css';
import { useEffect, useState } from "react";
import React from 'react';

export default function HowItWorksImageCard() {
    const [isMobile,setIsMobile] = useState(false)
    useEffect(()=>{
        window.innerHeight > 480 ? setIsMobile(true) : setIsMobile(false)
    })
    return (
        <>  
        <div className="how-it-works">
            How it works?
        </div> 
        {
            <div className="image-container">
                {/* <img src="https://cdn.shopify.com/s/files/1/0638/1391/0746/files/left_coins.jpg?v=1649100559"  */}
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/works_desk.jpg?v=1654494918"
                className="howItWorksImageContainer" alt="" />
                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/works.png?v=1654494756"
                className="howItWorksImageContainer2" alt="" />
            </div>
        }
        </>
    )
}
