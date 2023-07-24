import { Col, Row } from "antd";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col>
          <p>
            Xem phim hay miễn phí chất lượng cao với phụ đề tiếng việt - thuyết
            minh - lồng tiếng.
          </p>
        </Col>
        <Col>Quy định</Col>
        <Col>Giới thiệu</Col>
      </Row>
    </div>
  );
};
export default Footer;
