import React, {Component, useState, useEffect} from 'react';
import './home.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';

const Home = ()=>{
    const [status, toggleSidebar] = useState(false);
    const [category, changeCategory] = useState('none');

    const sortBy = (newCategory)=>{
        changeCategory(newCategory);
    }

    return (
        <main className="home">
            <Main status={status} toggleSidebar={toggleSidebar} category={category}/>
            <Sidebar status={status} toggleSidebar={toggleSidebar} sortBy={sortBy}/>
        </main>
    );
}

export default Home;