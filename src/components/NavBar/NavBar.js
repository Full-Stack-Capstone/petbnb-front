import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from 'react-icons/fa';
import logo from '../../images/logo-no-background.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // const onOpenSideBar = () => {
  //   const sideNav = document.querySelector('.side-nav');
  //   sideNav.classList.add('side-nav-open');
  // };

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
          if (selected === 'home' || selected === 'manage') {
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
          <NavItem eventKey="home">
            <NavIcon>
              <FaHome className="icon-nav" />
            </NavIcon>
            <NavText>Home</NavText>
          </NavItem>
          <NavItem eventKey="my-pets">
            <NavIcon>
              <FaDog className="icon-nav" />
            </NavIcon>
            <NavText>My pets</NavText>
          </NavItem>
          <NavItem eventKey="all-rooms">
            <NavIcon>
              <FaHouseUser className="icon-nav" />
            </NavIcon>
            <NavText>Book a room</NavText>
          </NavItem>
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
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default NavBar;
