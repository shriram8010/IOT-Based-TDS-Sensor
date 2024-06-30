import React from 'react'
import {Routes ,Route } from 'react-router-dom';
import Category_navbar from '../components/category_navbar';
import Nav from '../components/nav';
import Product from '../components/product';
import Footer from '../components/footer';

export default function 
() {
  return (
    <div>
        <Nav />
        <Category_navbar/>
        <Product/>
        <Footer/>
        
    </div>
  )
}
