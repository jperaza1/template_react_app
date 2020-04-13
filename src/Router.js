import React, { lazy } from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SiderTemplate from "./layouts/Sider";
import FooterTemplate from "./layouts/Footer";

const { Content } = Layout;
const Home = lazy(() => import("./Page/Home/Home"));
const Second = lazy(() => import("./Page/Second/Second"));

export default function AppRouter() {
  return (
    <Layout>
      <Router>
        <SiderTemplate />
        <Layout>
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div className='site-layout-background' style={{ padding: 24 }}>
              <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/second' component={Second} exact />
              </Switch>
            </div>
          </Content>
          <FooterTemplate />
        </Layout>
      </Router>
    </Layout>
  );
}
