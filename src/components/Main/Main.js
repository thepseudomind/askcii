import React from 'react';
import './Main.scss';
import Navbar from '../Navbar/Navbar';
import Products from '../Products/Products';

const Main = ({status, toggleSidebar, category})=>{
    return (
       <div className={`main${(status) ? ' active' : ''}`}>
           <Navbar status={status} toggleSidebar={toggleSidebar}/>
           <Products status={status} category={category}/>
       </div> 
    );
}

export default Main;