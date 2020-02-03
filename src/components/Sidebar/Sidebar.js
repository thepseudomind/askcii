import React from 'react';
import './Sidebar.scss';

const Sidebar = ({status, toggleSidebar, sortBy})=>{
    return (
        <div className={`sidebar${(status) ? ' active' : ''}`}>
            <div className="sidebar__heading">
                <h2 className="sidebar__title">filter</h2>
                <a className="sidebar__close" onClick={()=> toggleSidebar(false)}>&times;</a>
            </div>
            <div className="sidebar__content">
                <h2 className="sidebar__title">sort by</h2>
                <ul className="sidebar__list">
                    <li className="sidebar__list--item" onClick={()=> sortBy('none')}>none</li>
                    <li className="sidebar__list--item" onClick={()=> sortBy('asc')}>by asc</li>
                    <li className="sidebar__list--item" onClick={()=> sortBy('id')}>by id</li>
                    <li className="sidebar__list--item" onClick={()=> sortBy('size')}>by size</li>
                    <li className="sidebar__list--item" onClick={()=> sortBy('price')}>by price</li>
                </ul>
            </div>
            <div className="sidebar__heading">
                <h2 className="sidebar__title">from our sponsors</h2>
                <img className="ad" src={`http://localhost:3000/ads/?r=${Math.floor(Math.random()*1000)}`}/>
            </div>
        </div>
    );
}

export default Sidebar;