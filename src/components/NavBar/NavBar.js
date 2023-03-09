import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
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

function NavBar() {
  const dispatch = useDispatch();
  const statusLogin = localStorage.getItem('token');
  useEffect(() => {
    dispatch(checkLoginStatus());
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
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

  return (
    <div className="nav-contain">
      <SideNav
        onSelect={(selected) => {
          if (
            selected === 'home' ||
            selected === 'manage' ||
            selected === 'logout'
          ) {
            navigate('/');
          } else {
            navigate(`/${selected}`);
          }
        }}
        className="side-nav"
        onToggle={handleToggleClick}
      >
        <img src={logo} alt="logo" className="logo-nav" />
        <SideNav.Toggle onClick={handleToggleClick} />
        <SideNav.Nav defaultSelected="home">
          {!statusLogin && (
            <NavItem eventKey="login">
              <NavIcon>
                <FaSignInAlt className="icon-nav" />
              </NavIcon>
              <NavText>Login</NavText>
            </NavItem>
          )}
          {!statusLogin && (
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
          {statusLogin && (
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
          {statusLogin && (
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
          {statusLogin && (
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
  );
}

export default NavBar;
