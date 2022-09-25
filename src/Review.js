import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import { ImMusic } from "react-icons/im";


const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,image,job,text} = people[index];

  const getRand = () => {
    let rnd = Math.floor(Math.random() * people.length)
    if(index===rnd) getRand()
    else setIndex(rnd)
  }

  const nextPerson = () => {
    if (index === people.length - 1)
    {
      setIndex(0)
    }
    else setIndex(index+1)
  }

  const prevPerson = () => {
    if (index === 0)
    {
      setIndex(people.length-1)
    }
    else setIndex(index-1)
  }

  return <article className='review'>
    <div className='img-container '>
      <img src={image} alt={name} className="person-img"></img>
      <span className='quote-icon'>
        <FaQuoteRight /> 
      </span>
    </div>
    <h4 className='author'> {name}</h4>
    <p className='job'> {job}</p>
    <p className='info'> {text}</p>
    <div className='btn-container'>
      <button  className="next-btn" onClick={prevPerson}> <FaChevronLeft/>  </button>
      <button className="prev-btn" onClick={nextPerson}> <FaChevronRight/> </button>
    </div>
    <button  className="random-btn" onClick={getRand}> Random </button>
  </article>;
};

export default Review;
