import React, {Component} from 'react'
import './css/coinHistoryOrderCard.css'
import pic from './images/earnings.png';
import calenderPic from './images/calender.png';
import coinPic from './images/500coin.jpg';
import { useEffect } from 'react';

export default function SpendingsCard({item}) {
    const date = new Date(item.createdAt);
    const required_date = `${date.getDate()} ${date.toLocaleString('en-US', {month: 'short'})} ${date.getFullYear()} `
   
    return (
        <>
            <div className='orderCardContainer'>
                <img className='fire' src={pic} alt="" />
                <div className='historyContentCard'>
                    <div className='historyContent'>
                        <div className='spending-text' >
                            Spent <span className='coins'>{item.value} MCash credits</span>  on Amazon Voucher code: #{item.order}
                        </div>
                        <div className='spending-image'> 
                            {/* <img src={coinPic} className='coin-pic' alt="" /> */}
                            <div className='mcash-currency-spendings-div'>
                                <img src="https://cdn.shopify.com/s/files/1/0607/6029/3588/files/green-mcash.png?v=1654253888" alt="" srcset="" />
                                {item.value}
                            </div>
                        </div>
                    </div>
                    <div className='historyInfo'>
                        <img src={calenderPic} className='calender' alt="" />
                        <span className='historyDate'> {required_date}</span>
                    </div>
                </div>
            </div>
        </>
    )
}