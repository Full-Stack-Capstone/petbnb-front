import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './NavBar.css';
import {
  FaCalendarCheck,
  FaDog,
  FaHome,
  FaList,
  FaHouseUser,
  FaHotel,
  FaArrowRight,
  FaSignInAlt,
  FaSignOutAlt,
} from 'react-icons/fa';
import checkLoginStatus from '../../redux/thunks/navLoginThunk';
import logo from '../../images/logo-no-background.png';
import logout from '../../redux/thunks/navLogoutThunk';

function NavBar() {
  const [windowDimensions, setWindowDimensions] = useState(null);
  useEffect(() => {
    setWindowDimensions(window.innerWidth);
  }, []);
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const isMobile = windowDimensions <= 768;
  const dispatch = useDispatch();
  const auth = localStorage.getItem('token');
  useEffect(() => {
    dispatch(checkLoginStatus());
  }, [auth]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleToggleClick = () => {
    setIsOpen(!isOpen);
    const main = document.querySelector('.ontoggle');
    if (isOpen) {
      main.classList.remove('ontoggle-open');
      main.classList.add('ontoggle-close');
    } else {
      main.classList.add('ontoggle-open');
      main.classList.remove('ontoggle-close');
    }
  };

  const handleNavItemSelect = (eventKey) => {
    switch (eventKey) {
      case 'home':
        navigate('/');
        break;
      case 'all-rooms':
        navigate('/book-a-room');
        break;
      case 'my-pets':
        navigate('/my-pets');
        break;
      case 'my-rooms':
        navigate('/my-rooms');
        break;
      case 'my-reservations':
        navigate('/my-reservations');
        break;
      case 'login':
        navigate('/login');
        break;
      case 'signup':
        navigate('/signup');
        break;
      case 'logout':
        handleLogoutClick();
        break;
      default:
        break;
    }
    handleToggleClick();
  };

  return (
    <div className="nav-contain-main">
      {!isMobile ? (
        <div className="nav-contain desktop">
          <SideNav
            onSelect={(selected) => {
              if (
                selected === 'home'
                || selected === 'manage'
                || selected === 'logout'
              ) {
                navigate('/');
              } else {
                navigate(`/${selected}`);
              }
              handleToggleClick();
            }}
            className="side-nav"
            onToggle={handleToggleClick}
            expanded={isOpen}
          >
            <img src={logo} alt="logo" className="logo-nav" />
            <SideNav.Toggle onClick={handleToggleClick} />
            <SideNav.Nav defaultSelected="home">
              {!auth && (
                <NavItem eventKey="login">
                  <NavIcon>
                    <FaSignInAlt className="icon-nav" />
                  </NavIcon>
                  <NavText>Login</NavText>
                </NavItem>
              )}
              {!auth && (
                <NavItem eventKey="signup">
                  <NavIcon>
                    <FaArrowRight className="icon-nav" />
                  </NavIcon>
                  <NavText>Sign up</NavText>
                </NavItem>
              )}
              <NavItem eventKey="home">
                <NavIcon>
                  <FaHome className="icon-nav" />
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              {auth && (
                <NavItem eventKey="my-pets">
                  <NavIcon>
                    <FaDog className="icon-nav" />
                  </NavIcon>
                  <NavText>My pets</NavText>
                </NavItem>
              )}
              <NavItem eventKey="all-rooms">
                <NavIcon>
                  <FaHouseUser className="icon-nav" />
                </NavIcon>
                <NavText>Book a room</NavText>
              </NavItem>
              {auth && (
                <NavItem eventKey="manage">
                  <NavIcon>
                    <FaList className="icon-nav" />
                  </NavIcon>
                  <NavText>Manage</NavText>
                  <NavItem eventKey="my-rooms">
                    <NavIcon>
                      <FaHotel className="icon-nav" />
                    </NavIcon>
                    <NavText>My Rooms</NavText>
                  </NavItem>
                  <NavItem eventKey="my-reservations">
                    <NavIcon>
                      <FaCalendarCheck className="icon-nav" />
                    </NavIcon>
                    <NavText>My Reservations</NavText>
                  </NavItem>
                </NavItem>
              )}
              {auth && (
                <NavItem eventKey="logout" onClick={handleLogoutClick}>
                  <NavIcon>
                    <FaSignOutAlt className="icon-nav" />
                  </NavIcon>
                  <NavText>Logout</NavText>
                </NavItem>
              )}
            </SideNav.Nav>
          </SideNav>
        </div>
      ) : (
        <div className="nav-contain-mobile">
          <Navbar
            collapseOnSelect
            fixed="top"
            expand='"sm"'
            variant="dark"
            className="nav-bar-mobile"
            expanded={isOpen}
          >
            <Container>
              <Navbar.Toggle
                aria-controls="responsive-nav-bar"
                onClick={handleToggleClick}
              />
              <Navbar.Collapse id="responsive-nav-bar">
                <Nav>
                  <NavItem
                    eventKey="home"
                    className="navitem-mobile"
                    onSelect={handleNavItemSelect}
                  >
                    <NavIcon>
                      <FaHome className="icon-nav icon-mobile" />
                    </NavIcon>
                    <NavText>Home</NavText>
                  </NavItem>
                  <NavItem
                    eventKey="all-rooms"
                    className="navitem-mobile"
                    onSelect={handleNavItemSelect}
                  >
                    <NavIcon>
                      <FaHouseUser className="icon-nav icon-mobile" />
                    </NavIcon>
                    <NavText>Book a room</NavText>
                  </NavItem>
                  {auth && (
                    <NavItem
                      eventKey="my-pets"
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaDog className="icon-nav icon-mobile" />
                      </NavIcon>
                      <NavText>My pets</NavText>
                    </NavItem>
                  )}
                  {auth && (
                    <NavItem
                      eventKey="my-rooms"
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaHotel className="icon-nav icon-mobile" />
                      </NavIcon>
                      <NavText>My Rooms</NavText>
                    </NavItem>
                  )}
                  {auth && (
                    <NavItem
                      eventKey="my-reservations"
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaCalendarCheck className="icon-nav icon-mobile" />
                      </NavIcon>
                      <NavText>My Reservations</NavText>
                    </NavItem>
                  )}
                  {auth && (
                    <NavItem
                      eventKey="logout"
                      onClick={handleLogoutClick}
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaSignOutAlt className="icon-nav" />
                      </NavIcon>
                      <NavText>Logout</NavText>
                    </NavItem>
                  )}
                  {!auth && (
                    <NavItem
                      eventKey="login"
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaSignInAlt className="icon-nav" />
                      </NavIcon>
                      <NavText>Login</NavText>
                    </NavItem>
                  )}
                  {!auth && (
                    <NavItem
                      eventKey="signup"
                      className="navitem-mobile"
                      onSelect={handleNavItemSelect}
                    >
                      <NavIcon>
                        <FaArrowRight className="icon-nav" />
                      </NavIcon>
                      <NavText>Sign up</NavText>
                    </NavItem>
                  )}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      )}
    </div>
  );
}

export default NavBar;
