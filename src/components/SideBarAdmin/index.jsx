import React, { useState } from 'react';
import { IoIosPaper } from 'react-icons/io';
import { FaPaw, FaHeadphones, FaBook } from 'react-icons/fa';
import { RiDashboardFill } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
import { Menu } from './styles';
import { Link, useLocation } from 'react-router-dom';

export function SideBarAdmin() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <Menu>
      <li className={active === '/dashboardAdmin' ? 'active' : ''}>
        <Link to="/dashboardAdmin" onClick={() => setActive('/dashboardAdmin')}>
          <RiDashboardFill />
        </Link>
      </li>
      <li className={active === '/formsReview' ? 'active' : ''}>
        <Link to="/formsReview" onClick={() => setActive('/forms')}>
          <IoIosPaper />
        </Link>
      </li>
      <li className={active === '/petslist' ? 'active' : ''}>
        <Link to="/petslist" onClick={() => setActive('/petslist')}>
          <FaPaw />
        </Link>
      </li>
      <li className={active === '/educapetreview' ? 'active' : ''}>
        <Link to="/educapetreview" onClick={() => setActive('/educapetreview')}>
          <FaBook />
        </Link>
      </li>
      <li className={active === '/supportcentral' ? 'active' : ''}>
        <Link to="/supportcentral" onClick={() => setActive('/supportcentral')}>
          <FaHeadphones />
        </Link>
      </li>
    </Menu>
  );
}
