import React from 'react';
import { Layout, Space } from 'antd';
import Header from "./header"
const { Footer, Sider, Content } = Layout;

const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
   
    <Layout>
      <Sider className="sider">Sider</Sider>
      <Layout>
        <Header><Header/></Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  </Space>
);
export default Home;