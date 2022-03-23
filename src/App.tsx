import React from 'react';
import { Layout } from 'antd';
import { HeaderLayout, MainLayout, FooterLayout } from './Layouts';
import './App.css';

function App() {
  return (
    <>
      <Layout className="layout">
        <HeaderLayout />
        <MainLayout />
        <FooterLayout />
      </Layout>
    </>
  );
}

export default App;
