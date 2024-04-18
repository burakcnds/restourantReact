import React, { useEffect, useState } from 'react';
import '../index.css';
import logo from '../assets/logopng.png';
import {Routes,Route,Link,NavLink} from "react-router-dom"
function Headerx() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const btnOpenSidebar = document.querySelector("#btn-menu");
        const sidebar = document.querySelector("#sidebar");
        const btnCloseSidebar = document.querySelector("#close-sidebar");
        const mainContent = document.querySelector("#main-content");

        const openSidebar = () => {
            sidebar.style.left = "0";
            setSidebarOpen(true);
        };

        const closeSidebar = () => {
            sidebar.style.left = "-100%";
            setSidebarOpen(false);
        };

        const handleOutsideClick = (event) => {
            if (sidebarOpen && !sidebar.contains(event.target) && !btnOpenSidebar.contains(event.target)) {
                closeSidebar();
            }
        };

        btnOpenSidebar.addEventListener("click", openSidebar);
        btnCloseSidebar.addEventListener("click", closeSidebar);
        document.addEventListener("click", handleOutsideClick);

        return () => {
            btnOpenSidebar.removeEventListener("click", openSidebar);
            btnCloseSidebar.removeEventListener("click", closeSidebar);
            document.removeEventListener("click", handleOutsideClick);
        };
    }, [sidebarOpen]);

    return (
        <>
            <header>
                <div className="header-row">
                    <div className="container">
                        <div className="header-wrapper">
                            <div className="header-mobile">
                                <i className="bi bi-list text-white" id="btn-menu"></i>
                            </div>
                            <div className="header-left">
                                <Link to={'/'}  className="logo">
                                    <img width={'90px'} height={'80px'} src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="header-center" id="sidebar">
                                <nav className="navigation">
                                    <ul className="menu-list mt-2">
                                        <li className="menu-list-item">
                                            <NavLink  to={"/"} className="menu-link">
                                                Anasayfa
                                            </NavLink>
                                        </li>
                                        <li className="menu-list-item">
                                            <NavLink to={"/hakkimizda"} className="menu-link">
                                                Biz Kimiz
                                            </NavLink>
                                        </li>
                                        <li className="menu-list-item">
                                            <NavLink to={"/menu"} className="menu-link">
                                                MENÜ
                                            </NavLink>
                                        </li>
                                        <li className="menu-list-item">
                                            <NavLink to={"/iletisim"} className="menu-link ">
                                                İletişim
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                                <i className="bi-x-circle text-white" id="close-sidebar"></i>
                            </div>
                            <div className="header-right">
                                <div className="header-right-links">
                                    <span className="header-account">
                                    <Link to={"/rezervasyon"} className="book-a-table-btn">Rezervasyon</Link>
                                    </span>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Ana içerik bölümü */}
            <div id="main-content" onClick={() => sidebarOpen && setSidebarOpen(false)}>
                {/* Ana içerik */}
            </div>
        </>
    );
}

export default Headerx;
