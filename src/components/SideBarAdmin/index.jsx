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
      <li className={active === '/pets' ? 'active' : ''}>
        <Link to="/pets" onClick={() => setActive('/pets')}>
          <FaPaw />
        </Link>
      </li>
      <li className={active === '/educapetReview' ? 'active' : ''}>
        <Link to="/educapetReview" onClick={() => setActive('/educapetReview')}>
          <FaBook />
        </Link>
      </li>
      <li className={active === '/support' ? 'active' : ''}>
        <Link to="/support" onClick={() => setActive('/support')}>
          <FaHeadphones />
        </Link>
      </li>
    </Menu>
  );
}
