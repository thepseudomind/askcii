import React from 'react';
import './Product.scss';

const Product =({status, face, size, date, price})=>{
    const dateToDisplay = (fetchedDate)=>{
        const dateDifference = Math.abs(new Date() - new Date(fetchedDate));
        const dateInDays = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
        if(dateInDays <= 7 && dateInDays > 1){
            return `${dateInDays} days ago`;
        }else if(dateInDays === 1){
            return `${dateInDays} day ago`;;
        }else if(dateInDays === 0){
            return 'Today';
        }else{
            return new Date(fetchedDate).toDateString();
        }
    }

    const formatPrice = (price)=>{
        return `$${(price/100).toFixed(2)}`;
    }

    return (
        <div className={`product${(status) ? ' active' : ''}`}>
            <div className="product__icon">
                <span style={{fontSize: `${size}px`}}>{face}</span>
            </div>
            <div className="product__content">
                <p className="product__price">{formatPrice(price)}</p>
                <p>{`Size: ${size}px`}</p>
                <p className="product__date">{dateToDisplay(date)}</p>
            </div>
        </div>
    );
}

export default Product;