import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import { logOut } from '../../../../services/login.service';
import { useAuth } from '../../../../Contexts/AuthContext';
import iconBar from './../../../../assets/images/icons/icon-bar.png';

function Header() {
  const { isLogged, setIsLogged, employee } = useAuth();

  const logOutUser = () => {
    logOut();
    setIsLogged(false);
  };

  return (
    <header className="main-header header-style-one">
      {/* Header Top */}
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="left-column">
              <div className="text">Enjoy the Beso while we fix your car</div>
              <div className="office-hour">Monday - Saturday 7:00AM - 6:00PM</div>
            </div>
            <div className="right-column">
              {isLogged ? (
                <div className="phone-number">
                  <strong>Welcome {employee?.employee_first_name}</strong>
                </div>
              ) : (
                <div className="phone-number">
                  Schedule Appointment: <strong>1800 456 7890</strong>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Header Upper */}
      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            {/* Logo */}
            <div className="logo-box">
              <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
              </div>
            </div>

            {/* Navigation */}
            <div className="right-column">
              <div className="nav-outer">
                <div className="mobile-nav-toggler">
                  <img src={iconBar} alt="Toggle" />
                </div>

                <nav className="main-menu navbar-expand-md navbar-light" style={{marginRight:"20px"}}>
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* Login/Logout Button */}
              {isLogged ? (
                  <div className="link-btn" >
                    <Link to="/" className="theme-btn btn-style-one blue" onClick={logOutUser} >Log out</Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one" style={{backgroundColor:"#08194a", borderRadius:"5px"}}>Login</Link>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header (optional - structure preserved) */}
      <div className="sticky-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/"><img src={logo} alt="Sticky Logo" /></Link>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div className="mobile-nav-toggler">
                    <img src={iconBar} alt="" />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light" style={{marginRight:"20px"}}>
                    <ul className="navigation">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                  </nav>
                </div>

                {/* Sticky Login/Logout */}
                {isLogged ? (
                  <div className="link-btn">
                    <Link to="/" className="theme-btn btn-style-one blue" onClick={logOutUser}>
                      Log out
                    </Link>
                  </div>
                ) : (
                  <div className="link-btn">
                    <Link to="/login" className="theme-btn btn-style-one" style={{backgroundColor:"#08194a" ,borderRadius:"5px"}}>Login</Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Placeholder */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn"><span className="icon flaticon-remove"></span></div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/"><img src={logo} alt="Mobile Logo" /></Link>
          </div>
          <ul className="navigation">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </div>

      {/* Overlay Cursor */}
      <div className="nav-overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
    </header>
  );
}

export default Header;
