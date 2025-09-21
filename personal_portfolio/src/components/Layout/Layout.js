import React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from './Header';
import Footer from './Footer';
import './Layout.scss';

const { Content } = AntLayout;

const Layout = ({ children }) => {
  return (
    <AntLayout className="main-layout">
      <Header />
      <Content className="main-content">
        {children}
      </Content>
      <Footer />
    </AntLayout>
  );
};

export default Layout;