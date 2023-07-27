import "./header.css";
import logo from "../../../../assets/images/logo_ha.png";
import { AutoComplete, Button, Col, Input, Row, Select, Typography } from "antd";
import "../../../../index.css";
import { useState } from "react";
import Login from "../../../Modal/Login";
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
  { value: "VN", label: <img src={vnFlag} alt="VN Flag" width={30} /> },
  { value: "EN", label: <img src={enFlag} alt="EN Flag" width={30} /> },
];
const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

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
                <Col span={8}>
                  <Typography
                    style={{ color: "#fff" }}
                    onClick={() => setOpenSignUp(true)}
                  >
                    Đăng nhập
                  </Typography>
                </Col>
                <Col span={10}>
                  <Button
                    onClick={() => setOpenLogin(true)}

                  >
                    Đăng ký
                  </Button>
                </Col>

                <Col span={2}>
                  <Select

                    defaultValue="VN"
                    suffixIcon={null}
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
        {openLogin && <Login openModal={openLogin} setOpenModel={setOpenLogin} />}
        {openSignUp && (
          <Login openModal={openSignUp} setOpenModel={setOpenSignUp} />
        )}
      </div>

    </div>
  );
};
export default Header;
