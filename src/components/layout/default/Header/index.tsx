import "./header.css";
import logo from "../../../../assets/images/logo.png";
import { AutoComplete, Col, Input, Row, Select, Typography } from "antd";
import "../../../../index.css";
import { useState } from "react";
import Login from "../../../Modal/Login";
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
        title: "Service 1",
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

const Header = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  return (
    <div className="container header">
      <Row gutter={20}>
        <Col span={6}>
          <img alt="" src={logo} width={100} />
        </Col>
        <Col span={10}>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            style={{ width: 450, height: 50 }}
            // options={options}
          >
            <Input.Search size="large" placeholder="Search..." />
          </AutoComplete>
        </Col>
        <Col>
          <div>
            <Row gutter={5}>
              <Col>
                <Typography
                  onClick={() => setOpenLogin(true)}
                  style={{ color: "#fff" }}
                >
                  Đăng ký
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{ color: "#fff" }}
                  onClick={() => setOpenSignUp(true)}
                >
                  Đăng nhập
                </Typography>
              </Col>
              <Col>
                <Select
                  defaultValue="VN"
                  suffixIcon={null}
                  style={{ width: 40, borderRadius: "50px" }}
                  options={[
                    { value: "VN", label: "VN" },
                    { value: "EN", label: "EN" },
                  ]}
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
  );
};
export default Header;
