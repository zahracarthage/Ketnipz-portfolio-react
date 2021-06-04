import React from 'react'
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolio';
import { useState } from 'react';

export default function Portfolio() {

    const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]; 
    
    const[categories,setCategories] = useState(allCategories);
    const[menuItems,setMenuItems] = useState(portfolios); 

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios);
            return ; 
        }
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;

        })
        setMenuItems(filteredData);
    }
    return (
        <div className ="PortfolioPage">
            <div className="title">
            <Title title={'Ketznip Portfolio'} span={'Mi Portfolio'} />

            </div>
            
            <div className="portfolios-page">
                <Categories filter={filter} categories={categories}/> 
                <MenuItems menuItems={menuItems} />

            </div>
        </div>
    )
}
