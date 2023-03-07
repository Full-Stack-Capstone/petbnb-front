import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './NavBar.css';
import {
  FaCalendarCheck,
  FaDog,
  FaHome,
  FaHotel,
  FaHouseUser,
} from 'react-icons/fa';

function NavBar() {
  const navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        if (selected === 'home') {
          navigate('/');
        } else {
          navigate(`/${selected}`);
        }
      }}
    >
      <SideNav.Toggle />
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
        <NavItem eventKey="all-rooms">
          <NavIcon>
            <FaHouseUser className="icon-nav" />
          </NavIcon>
          <NavText>Book a room</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}

export default NavBar;
