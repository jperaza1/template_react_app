import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHouseUser } from "@fortawesome/free-solid-svg-icons";
const { Sider } = Layout;

export default function SiderTemplate() {
  return (
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      style={{ height: "100vh" }}
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className='logo' />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
        <Menu.Item key='1'>
          <FontAwesomeIcon icon={faHome} />
          <Link to='/'>
            <span className='nav-text'> Inicio </span>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <FontAwesomeIcon icon={faHouseUser} />
          <Link to='/second'>
            <span className='nav-text'> Second </span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
