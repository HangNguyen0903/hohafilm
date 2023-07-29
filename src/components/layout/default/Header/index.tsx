import "./header.css";
import logo from "../../../../assets/images/logo_ha.png";
import { AutoComplete, Button, Col, Input, Row, Select, Typography } from "antd";
import "../../../../index.css";
import { useState } from "react";

import vnFlag from "../../../../assets/images/VNFLAT.jpg"
import enFlag from "../../../../assets/images/ENFLAT.jpg"

interface MenuItem {
  title: string;
  link: string;
  submenus?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Trang chủ",
    link: "#home",
  },
  {
    title: "Thể loại",
    link: "#about",
  },
  {
    title: "Quốc gia",
    link: "#services",
    submenus: [
      {
        title: "Cổ trang- Thần thoại",
        link: "#service1",
      },
      {
        title: "Service 2",
        link: "#service2",
      },
      {
        title: "Service 3",
        link: "#service3",
      },
    ],
  },
  {
    title: "Phim mới",
    link: "#phimmoi",
  },
  {
    title: "Phim bộ",
    link: "#phimbo",
  },
  {
    title: "Phim lẻ",
    link: "#phimle",
  },
  {
    title: "Phim thuyết minh",
    link: "#thuyetminh",
  },
];
const options = [
  { value: "VN", label: <div><img src={vnFlag} alt="VN" width={20} /> VN</div> },
  { value: "EN", label: <div><img src={enFlag} alt="EN Flag" width={20} /> EN</div> },
];
const Header = () => {


  return (
    <div className="header">
      <div className="container">
        <Row gutter={20} style={{ alignItems: 'center' }}>
          <Col span={4}>
            <a href="/">
              <img alt="" src={logo} width={130} />
            </a>

          </Col>
          <Col span={15}>
            <AutoComplete
              popupClassName="certain-category-search-dropdown"
              style={{ width: 450, height: 50 }}
            >
              <Input.Search size="large" placeholder="Search..." />
            </AutoComplete>
          </Col>
          <Col span={5} style={{ justifyContent: 'right' }}>
            <div>
              <Row gutter={10}>
                <Col span={10}>
                  <Button
                    type="text"
                    href="login"
                    style={{ color: '#fff' }}
                  >
                    Đăng nhập
                  </Button>
                </Col>
                <Col span={10}>
                  <Button
                    href="sign-up"
                  >
                    Đăng ký
                  </Button>
                </Col>

                <Col span={2}>
                  <Select
                    style={{ width: '50px', padding: 0 }}
                    defaultValue="VN"
                    options={options}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <nav className="menu">
            <ul className="menu-list">
              {menuItems.map((menuItem) => (
                <li
                  key={menuItem.title}
                  className={menuItem.submenus ? "has-submenu" : ""}
                >
                  <a href={menuItem.link}>{menuItem.title}</a>
                  {menuItem.submenus && (
                    <ul className="submenu">
                      {menuItem.submenus.map((submenu) => (
                        <li key={submenu.title}>
                          <a href={submenu.link}>{submenu.title}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </Row>

      </div>

    </div>
  );
};
export default Header;
