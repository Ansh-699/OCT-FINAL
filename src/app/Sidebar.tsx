'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface submenu {
    name: string,
    link: string,
    icon?: string
}

interface menuItem {
    name: string,
    icon: string,
    link?: string,
    submenu?: Array<submenu>
}

interface menu {
    name: string,
    items: Array<menuItem>
}


const menues: menu[] = [
    {
        name: "Menu",
        items: [
            {
                name: "Dashboard",
                icon: "bi bi-grid-fill",
                link: "/",
            },
            {
                name: "Contacts",
                icon: "bi bi-stack",
                link: "/contacts",
                submenu: [
                    { name: "All Contacts", link: "/contacts", icon: "bi bi-people" },
                    { name: "Add Contact", link: "/contacts/add", icon: "bi bi-person-plus" },
                    { name: "Contact Groups", link: "/contacts/groups", icon: "bi bi-gear" },
                ]
            },
            {
                name: "Transactions",
                icon: "bi bi-grid-fill",
                link: "/transactions",
                submenu: [
                    { name: "All Transactions", link: "/transactions", icon: "bi bi-list-ul" },
                    { name: "New Transaction", link: "/transactions/new", icon: "bi bi-plus-square" },
                    { name: "Transaction Reports", link: "/transactions/reports", icon: "bi bi-file-earmark-bar-graph" },
                ]
            },
            {
                name: "Deals",
                icon: "bi bi-grid-fill",
                link: "/deals",
                submenu: [
                    { name: "Active Deals", link: "/deals", icon: "bi bi-check-circle" },
                    { name: "New Deal", link: "/deals/new", icon: "bi bi-plus-circle" },
                    { name: "Deal History", link: "/deals/history", icon: "bi bi-clock-history" },
                ]
            },
            {
                name: "Expenses",
                icon: "bi bi-grid-fill",
                link: "/expenses",
                submenu: [
                    { name: "All Expenses", link: "/expenses", icon: "bi bi-list-ul" },
                    { name: "Add Expense", link: "/expenses/add", icon: "bi bi-plus-square" },
                    { name: "Expense Categories", link: "/expenses/categories", icon: "bi bi-menu-up" },
                ]
            },
            {
                name: "Currencies",
                icon: "bi bi-grid-fill",
                link: "/currencies",
                submenu: [
                    { name: "Currency List", link: "/currencies", icon: "bi bi-list-ul" },
                    { name: "Exchange Rates", link: "/currencies/rates", icon: "bi bi-arrow-left-right" },
                    { name: "Currency Settings", link: "/currencies/settings", icon: "bi bi-gear" },
                ]
            },

        ]
    },
];


const Sidebar = () => {
    const pathname = usePathname();
    const [openedSubmenu, setOpenedSubmenu] = useState<number | null>(null);

    const clickItem = (index: number, sub: any) => {
        if (sub) {
            setOpenedSubmenu(openedSubmenu === index ? null : index);
        }
    };

    const renderSubmenues = (submenues: submenu[]) => {
        return submenues.map((submenu, index) => (
            <li className="submenu-item" key={index}>
                <Link href={submenu.link} className="submenu-link">
                    {submenu.icon && <i className={submenu.icon + " me-2"}></i>}
                    {submenu.name}
                </Link>
            </li>
        ));
    };

    const renderMenuItems = (menuItems: menuItem[]) => {
        return menuItems.map((item, index) => {
            let itemClassname = "sidebar-item cursor-pointer";
            let submenuesClassname = "submenu";
            if (item.submenu) itemClassname += " has-sub";
            const path = "/" + pathname.split('/')[1];
            if (path == item.link) itemClassname += " active";
            submenuesClassname += openedSubmenu === index ? " submenu-open" : "";

            return (
                <li className={itemClassname} key={index} onClick={() => clickItem(index, item.submenu)}>
                    <Link href={item.link || "#"} className='sidebar-link' onClick={e => item.submenu && e.preventDefault()}>
                        <i className={item.icon}></i>
                        <span>{item.name}</span>
                    </Link>
                    {item.submenu && (
                        <ul className={submenuesClassname}>
                            {renderSubmenues(item.submenu)}
                        </ul>
                    )}
                </li>
            );
        });
    };

    const renderMenu = () => {
        return menues.map((menu, index) => (
            <React.Fragment key={index}>
                <li className="sidebar-title">{menu.name}</li>
                {renderMenuItems(menu.items)}
            </React.Fragment>
        ));
    };


    return (
        <div className="sidebar-wrapper active">
            <div className="sidebar-header position-relative">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <a href="/">OTC</a>
                    </div>
                    <div className="theme-toggle d-flex gap-2  align-items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="img" className="iconify iconify--system-uicons" width="20" height="20"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21">
                            <g fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2"
                                    opacity=".3"></path>
                                <g transform="translate(-210 -1)">
                                    <path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path>
                                    <circle cx="220.5" cy="11.5" r="4"></circle>
                                    <path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path>
                                </g>
                            </g>
                        </svg>
                        <div className="form-check form-switch fs-6">
                            <input className="form-check-input  me-0" type="checkbox" id="toggle-dark" style={{ cursor: "pointer" }} />
                            <label className="form-check-label"></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="img" className="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z">
                            </path>
                        </svg>
                    </div>
                    <div className="sidebar-toggler  x">
                        <a href="#" className="sidebar-hide d-xl-none d-block"><i className="bi bi-x bi-middle"></i></a>
                    </div>
                </div>
            </div>
            <div className="sidebar-menu">
                <ul className="menu">
                    {renderMenu()}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;