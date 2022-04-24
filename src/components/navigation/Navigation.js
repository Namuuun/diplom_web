import React, { useState, useEffect } from 'react';

function Navigation (props){
    return(
        <nav className="navbar fixed-top">
            <a className="navbar-logo ml-5" href="/">
                <span className="logo d-none d-xs-block"></span>
                <span className="logo-mobile d-block d-xs-none"></span>
            </a>

            <div className="d-flex align-items-center navbar-right">
                <div className="search">
                    <input placeholder="Хайх..." onChange={(e) => {
                        this.props.onChange(e.target.value);
                    }}/>
                    <span className="search-icon">
                        <i className="simple-icon-magnifier"></i>
                    </span>
                </div>

            </div>
            <a className='' href="/">
                <span class="name">Бидний тухай</span>
            </a>
            <a className='' href="/">
                <span class="name">Бүтээгдэхүүн</span>
            </a>
            <a className='' href="/">
                <span class="name">Үйлчилгээ</span>
            </a>
            <a className='' href="/">
                <span class="name">FAQ</span>
            </a>
            <a className='mr-5' href="/">
                <span class="name">Холбоо барих</span>
            </a>

        </nav>
    )
}
export default Navigation;