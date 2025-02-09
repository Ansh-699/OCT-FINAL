"use client";
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import "../scss/app.scss";
import "../scss/iconly.scss";
import "../scss/themes/dark/app-dark.scss";
import Sidebar from './Sidebar';
import { useState } from 'react';
import { cn } from "./lib/utils";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [messagesOpen, setMessagesOpen] = useState(false);

    const notifications = [
      { id: 1, message: "New transaction received: 0.5 BTC ($15,234.50)!" },
      { id: 2, message: "Your order #BTX582 for 2.3 ETH has been processed." },
      { id: 3, message: "Market alert: BTC up 5.2% in last 24h" },
      { id: 4, message: "Transfer completed: Sent 1.5 SOL to @jane_wallet" },
      { id: 5, message: "New price alert: ETH reached $2,000" }
    ];

    const messages = [
      { id: 1, sender: "John Doe", message: "Hey, I've sent you 0.25 BTC. Please confirm receipt." },
      { id: 2, sender: "Jane Smith", message: "Need help with transferring 1000 USDT to external wallet." },
      { id: 3, sender: "Trading Desk", message: "Your limit order for 3 ETH has been filled at $1,950." },
      { id: 4, sender: "Support Team", message: "Your KYC verification is complete. You can now trade." }
    ];

    return (
        <html lang="en" data-bs-theme="light">
            <head>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </head>
            <body>
                <div id="app">
                    <div id="sidebar" className="active">
                        <Sidebar />
                    </div>
                    <div id="main" className='layout-navbar'>
                        <header className='mb-3'>
                            <nav className="navbar navbar-expand navbar-light navbar-top">
                                <div className="container-fluid">
                                    <a href="#" className="burger-btn d-block">
                                        <i className="bi bi-justify fs-3"></i>
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-lg-0">
                                            <li className="nav-item dropdown me-1">
                                                <a
                                                    className="nav-link active dropdown-toggle text-gray-600"
                                                    href="#"
                                                    onClick={() => setMessagesOpen(!messagesOpen)}
                                                    aria-expanded="false"
                                                >
                                                    <i className='bi bi-envelope bi-sub fs-4'></i>
                                                </a>
                                                <ul className={cn("dropdown-menu dropdown-menu-end dropdown-menu-lg", messagesOpen ? "show" : "")}>
                                                    {messages.map(msg => (
                                                        <li key={msg.id}><a className="dropdown-item" href="#">
                                                            <div className="d-flex align-items-center">
                                                                <div className="avatar avatar-md">
                                                                    <Image src="/assets/images/faces/5.jpg" alt="User Avatar" width={40} height={40} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h6 className="mb-0">{msg.sender}</h6>
                                                                    <small>{msg.message}</small>
                                                                </div>
                                                            </div>
                                                        </a></li>
                                                    ))}
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li className="text-center">
                                                        <a className="dropdown-item" href="#">
                                                            View all messages
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown me-3">
                                                <a
                                                    className="nav-link active dropdown-toggle text-gray-600"
                                                    href="#"
                                                    onClick={() => setNotificationsOpen(!notificationsOpen)}
                                                    aria-expanded="false"
                                                >
                                                    <i className='bi bi-bell bi-sub fs-4'></i>
                                                </a>
                                                <ul className={cn("dropdown-menu dropdown-menu-end dropdown-menu-lg", notificationsOpen ? "show" : "")}>
                                                    {notifications.map(notif => (
                                                        <li key={notif.id}><a className="dropdown-item" href="#">{notif.message}</a></li>
                                                    ))}
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li className="text-center">
                                                        <a className="dropdown-item" href="#">
                                                            View all notifications
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="d-flex align-items-center">
                                            <Link href="/signup" className="btn btn-primary me-2">Sign Up</Link>
                                            <Link href="/signin" className="btn btn-secondary me-2">Sign In</Link>
                                            <Link href="/transfer" className="btn btn-success me-2">Transfer</Link>
                                            <div className="dropdown">
                                                <a href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <div className="user-menu d-flex">
                                                        <div className="user-name text-end me-3">
                                                            <h6 className="mb-0 text-gray-600">John Doe</h6>
                                                            <p className="mb-0 text-sm text-gray-600">Administrator</p>
                                                        </div>
                                                        <div className="user-img d-flex align-items-center">
                                                            <div className="avatar avatar-md">
                                                                <Image src="/assets/images/faces/1.jpg" alt="User Avatar" width={40} height={40} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </header>
                        {children}
                    </div>
                </div>
                <Script src='/assets/js/index.js' />
                <Script src='/assets/js/sidebar.js' />
            </body>
        </html>
    );
}
