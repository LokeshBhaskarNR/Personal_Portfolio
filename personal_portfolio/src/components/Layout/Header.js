import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeOutlined, 
  UserOutlined, 
  ProjectOutlined, 
  ContactsOutlined,
  BulbOutlined,
  MenuOutlined
} from '@ant-design/icons';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.scss';

const { Header: AntHeader } = Layout;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/about',
      icon: <UserOutlined />,
      label: <Link to="/about">About</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link to="/projects">Projects</Link>,
    },
    {
      key: '/contact',
      icon: <ContactsOutlined />,
      label: <Link to="/contact">Contact</Link>,
    },
  ];

  return (
    <AntHeader className="header theme-fixed-black">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <h2>Lokesh Bhaskar</h2>
          </Link>
        </div>
        
        <div className="desktop-menu">
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="main-menu"
          />
          <Button
            type="text"
            icon={<BulbOutlined />}
            onClick={toggleTheme}
            className="theme-toggle"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          />
        </div>

        <div className="mobile-menu">
          <Button
            type="text"
            icon={<BulbOutlined />}
            onClick={toggleTheme}
            className="theme-toggle"
          />
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
            className="menu-toggle"
          />
        </div>

        <Drawer
          title="Navigation"
          placement="right"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          className="mobile-drawer theme-fixed-black"
        >
          <Menu
            mode="inline"
            selectedKeys={[location.pathname]}
            items={menuItems}
            onClick={() => setDrawerVisible(false)}
          />
        </Drawer>
      </div>
    </AntHeader>
  );
};

export default Header;