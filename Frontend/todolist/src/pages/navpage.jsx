// Navpage.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Required for offcanvas
import { Link } from 'react-router-dom';

const Navpage = () => {
  const navItems = [
    { name: 'Home', link: '/home' },
    { name: 'About', link: '/about' },
    // { name: 'item', link: '/signup' },
    { name: 'Addtocard', link: '/addtocard' }
  ];

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/home">
          My Website
        </Link>

        <ul className="navbar-nav flex-row gap-4 d-none d-lg-flex">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link className="nav-link" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasMenu"
          aria-controls="offcanvasMenu"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas for Mobile */}
        <div
          className="offcanvas offcanvas-end bg-dark text-white"
          tabIndex="-1"
          id="offcanvasMenu"
          aria-labelledby="offcanvasMenuLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasMenuLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <Link
                    className="nav-link text-white"
                    to={item.link}
                    data-bs-dismiss="offcanvas"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navpage;
