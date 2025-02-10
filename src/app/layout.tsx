"use client";
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "../scss/app.scss";
import "../scss/iconly.scss";
import "../scss/themes/dark/app-dark.scss";
import Sidebar from './Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const notifications = [
    { id: 1, message: "New transaction received: 0.5 BTC ($15,234.50)!" },
    { id: 2, message: "Your order #BTX582 for 2.3 ETH has been processed." },
    { id: 3, message: "Market alert: BTC up 5.2% in last 24h" },
   
  ];

  const messages = [
    { id: 1, sender: "John Doe", message: "Hey, I've sent you 0.25 BTC. Please confirm receipt." },
    { id: 2, sender: "Jane Smith", message: "Need help with transferring 1000 USDT to external wallet." },
    
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <html lang="en" data-bs-theme="light">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <div id="app">
          <div id="sidebar" className="active">
            <Sidebar />
          </div>

          <div id="main" className="layout-navbar navbar-fixed">
            <header className="mb-3"></header>

            <nav className="navbar navbar-expand-lg navbar-light navbar-top">
              <div className="container-fluid">
                <a href="#" className="burger-btn d-block">
                  <i className="bi bi-justify fs-3"></i>
                </a>

                {/* Mobile Only Dropdown */}
                <div className="d-lg-none ms-auto">
                  <div className="dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots-vertical fs-4"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" style={{ maxHeight: "80vh", overflowY: "auto" }}>
                      {/* Notifications */}
                      <li><h6 className="dropdown-header">Notifications</h6></li>
                      {notifications.map((notif) => (
                        <li key={notif.id}><a className="dropdown-item small" href="#">{notif.message}</a></li>
                      ))}
                      <li><a className="dropdown-item text-center small" href="#">View all</a></li>

                      <li className="dropdown-divider"></li>

                      {/* Messages */}
                      <li><h6 className="dropdown-header">Messages</h6></li>
                      {messages.map((msg) => (
                        <li key={msg.id}>
                          <a className="dropdown-item" href="#">
                            <div className="d-flex align-items-center">
                              <div className="avatar avatar-sm me-2">
                                <Image src="/assets/images/faces/5.jpg" alt={msg.sender} width={32} height={32} />
                              </div>
                              <div>
                                <div className="fw-semibold">{msg.sender}</div>
                                <small className="text-muted">{msg.message}</small>
                              </div>
                            </div>
                          </a>
                        </li>
                      ))}
                      <li><a className="dropdown-item text-center small" href="#">View all</a></li>

                      <li className="dropdown-divider"></li>

                      {/* Auth Buttons */}
                      <li><Link className="dropdown-item" href="/signup">Sign Up</Link></li>
                      <li><Link className="dropdown-item" href="/signin">Sign In</Link></li>
                      <li><Link className="dropdown-item" href="/transfer">Transfer</Link></li>

                      <li className="dropdown-divider"></li>

                      {/* Profile Section */}
                      <li>
                        <div className="d-flex align-items-center px-3 py-2">
                          <div className="avatar avatar-sm me-2">
                            <Image src="/assets/images/faces/1.jpg" alt="Profile" width={32} height={32} />
                          </div>
                          <div>
                            <div className="fw-semibold">John Doe</div>
                            <small className="text-muted">Administrator</small>
                          </div>
                        </div>
                      </li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Profile</a></li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-left me-2"></i>Logout</a></li>
                    </ul>
                  </div>
                </div>

                {/* Desktop Only Elements */}
                <div className="collapse navbar-collapse d-none d-lg-block">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown me-1">
                      <a
                        className="nav-link active dropdown-toggle text-gray-600"
                        href="#"
                        id="messageDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-envelope bi-sub fs-4"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="messageDropdown">
                        {messages.map((msg) => (
                          <li key={msg.id}>
                            <a className="dropdown-item" href="#">
                              <div className="d-flex align-items-center">
                                <div className="avatar avatar-md">
                                  <Image src="/assets/images/faces/5.jpg" alt="User Avatar" width={40} height={40} />
                                </div>
                                <div className="ms-3">
                                  <h6 className="mb-0">{msg.sender}</h6>
                                  <small>{msg.message}</small>
                                </div>
                              </div>
                            </a>
                          </li>
                        ))}
                        <li><hr className="dropdown-divider" /></li>
                        <li className="text-center">
                          <a className="dropdown-item" href="#">View all messages</a>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown me-3">
                      <a
                        className="nav-link active dropdown-toggle text-gray-600"
                        href="#"
                        id="notificationDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="bi bi-bell bi-sub fs-4"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg" aria-labelledby="notificationDropdown">
                        {notifications.map((notif) => (
                          <li key={notif.id}><a className="dropdown-item" href="#">{notif.message}</a></li>
                        ))}
                        <li><hr className="dropdown-divider" /></li>
                        <li className="text-center">
                          <a className="dropdown-item" href="#">View all notifications</a>
                        </li>
                      </ul>
                    </li>
                  </ul>

                  <div className="d-flex align-items-center">
                    <Link href="/signup" className="btn btn-primary me-2 d-none d-lg-block">Sign Up</Link>
                    <Link href="/signin" className="btn btn-secondary me-2 d-none d-lg-block">Sign In</Link>
                    <Link href="/transfer" className="btn btn-success me-2 d-none d-lg-block">Transfer</Link>
                    
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
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li><a className="dropdown-item" href="#"><i className="icon-mid bi bi-person me-2"></i>My Profile</a></li>
                        <li><a className="dropdown-item" href="#"><i className="icon-mid bi bi-gear me-2"></i>Settings</a></li>
                        <li><a className="dropdown-item" href="#"><i className="icon-mid bi bi-wallet me-2"></i>Wallet</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#"><i className="icon-mid bi bi-box-arrow-left me-2"></i>Logout</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {children}
          </div>
        </div>

        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
        <Script src="/assets/js/index.js" />
        <Script src="/assets/js/sidebar.js" />
      </body>
    </html>
  );
}