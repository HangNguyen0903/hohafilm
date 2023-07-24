import { Col, Row } from "antd";
import "./footer.css";
import "../../../../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <Row className="container">
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
