import React from 'react'
import Title from '../Components/Title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allportfolio';
import { useState } from 'react';

export default function Portfolio() {

    const[categories,setCategories] = useState(null);
    const[menuItems,setMenuItems] = useState(portfolios); 

    return (
        <div className ="PortfolioPage">
            <div className="title">
            <Title title={'Ketznip Portfolio'} span={'Mi Portfolio'} />

            </div>
            
            <div className="portfolios-page">
                <Categories /> 
                <MenuItems menuItems={menuItems} />

            </div>
        </div>
    )
}
