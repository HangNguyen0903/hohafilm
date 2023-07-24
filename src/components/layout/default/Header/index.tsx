import "./header.css";
import logo from "../../../../assets/images/logo.png";
import { AutoComplete, Col, Input, Row, Typography } from "antd";

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
  return (
    <div className="header">
      <Row>
        <Col>
          <img alt="" src={logo} width={60} />
        </Col>
        <Col>
          <AutoComplete
            popupClassName="certain-category-search-dropdown"
            style={{ width: 250 }}
            // options={options}
          >
            <Input.Search size="large" placeholder="input here" />
          </AutoComplete>
        </Col>
        <Col>
          <div>
            <a>Đăng ký</a>
            <a>Đăng nhập</a>
          </div>
        </Col>
      </Row>
      <Row>
        {menu.map((item, index) => (
          <Typography key={index} style={{ color: "#fff" }}>
            {item.name}
          </Typography>
        ))}
      </Row>
    </div>
  );
};
export default Header;
