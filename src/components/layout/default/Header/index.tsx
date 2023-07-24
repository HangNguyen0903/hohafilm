import "./header.css";
import logo from "../../../../assets/images/logo.png";
import { AutoComplete, Col, Input, Row, Select, Typography } from "antd";
import "../../../../index.css";
import { useState } from "react";
import Login from "../../../Modal/Login";

const menu = [
  { id: 1, name: "Trang chủ" },
  { id: 2, name: "Thể loại" },
  { id: 3, name: "Quốc gia" },
  { id: 4, name: "Phim mới" },
  { id: 5, name: "Phim bộ" },
  { id: 6, name: "Phim lẻ" },
  { id: 7, name: "Phim thuyết minh" },
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
        {menu.map((item, index) => (
          <Typography
            key={index}
            style={{ color: "#fff", marginRight: "30px" }}
          >
            {item.name}
          </Typography>
        ))}
      </Row>
      {openLogin && <Login openModal={openLogin} setOpenModel={setOpenLogin} />}
      {openSignUp && (
        <Login openModal={openSignUp} setOpenModel={setOpenSignUp} />
      )}
    </div>
  );
};
export default Header;
