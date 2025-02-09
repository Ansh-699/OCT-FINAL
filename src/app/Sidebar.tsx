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
    const [activeMenu, setActiveMenu] = useState(0);
    const [openedSubmenues, setOpenedSubmenues] = useState<number[]>([]);

    const clickItem = (index: number, sub: any) => {
        if (sub) {
            let submenues = openedSubmenues;
            if (submenues.includes(index)) {
                submenues = submenues.filter(v => v != index);
            } else {
                submenues = [...openedSubmenues, index];
            }
            setOpenedSubmenues(submenues);
        }
    }

    const renderSubmenues = (submenues: submenu[]) => {
        return submenues.map((submenu, index) => {
            return (
                <li className="submenu-item" key={index}>
                    <Link href={submenu.link} className="submenu-link">
                        {submenu.icon && <i className={submenu.icon + " me-2"}></i>}
                        {submenu.name}
                    </Link>
                </li>
            )
        })
    }


    const renderMenuItems = (menuItems: menuItem[]) => {
        return menuItems.map((item, index) => {
            let itemClassname = "sidebar-item cursor-pointer";
            let submenuesClassname = "submenu";
            if (item.submenu) itemClassname += " has-sub";
            const path = "/" + pathname.split('/')[1];
            if (path == item.link) itemClassname += " active";
            if (openedSubmenues.includes(index)) submenuesClassname += " submenu-open";
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
            )

        });
    }


    const renderMenu = () => {
        return menues.map((menu, index) => {
            return (
                <React.Fragment key={index}>
                    <li className="sidebar-title">{menu.name}</li>
                    {renderMenuItems(menu.items)}
                </React.Fragment>
            )
        })
    }

    return (
        <div className="sidebar-wrapper active">
            <div className="sidebar-header position-relative">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <Link href="/">
                            <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Crypto OTC</span>
                        </Link>
                    </div>
                    {/* ... (rest of the header remains the same) */}
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