import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import NewsImg from '../assets/images/newsimg.jpg'
import './newspage.css';
import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Newspage = () => {
    const [data, setData] = useState([]);
    const {state} = useLocation();
    useEffect(() => {
        axios.get(`http://localhost:3000/news/${state.id}`)
        .then((response) => setData(response.data))
        .catch((error) => {
            console.error('Error fetching data:', error);
          });
    }, [state.id]);

    return (
    <>
        <div className='header' style={{ backgroundImage: `url(${NewsImg})` }}>  
            <Navbar/>
        </div>
        <div className='newsbody'>
            <div className="news-hero-text">
                <h1>{data.heading}</h1>
                <p>{data.author}</p>
            </div>
            
            <p>This is going to be a vertical line. Just imagine it!</p>
            <div className="articles">
                <article>{data.article}</article>
            </div>
        </div>
        <Footer />
    </>
    )
}

export default Newspage;
