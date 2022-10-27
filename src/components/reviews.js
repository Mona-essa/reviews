import React from "react";
import people from "../data";
import { useState } from 'react';

const Reviews = () => {
    const [index, setIndex] = useState(0);
    const {image,text,name,job} = people[index];

    const checkNumber = (number) => {
        if(number > people.length -1) {
            return 0 
        }
        if(number < 0){
            return people.length -1;
        }
        return number;
    };

    const  handleLeft = () => {
       setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
       });
       
    };

    const handlRight = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
        
    }
    return(
       <article>
                <img src={image} className="image"/>
                <div className="quote-right"><i className="fa-solid fa-quote-right"></i></div>
                <div className="info">
                    <h4 className="name">{name}</h4>
                    <h4 className="job">{job}</h4>
                </div>
                <p>{text}</p>
                <div className="button-container">
                    <button onClick={handleLeft} className="left"><i className="fa-solid fa-chevron-left"></i></button>
                    <button onClick={handlRight} className="right"><i className="fa-solid fa-chevron-right"></i></button>
                </div>
            </article>
       
    )
}
export default Reviews;