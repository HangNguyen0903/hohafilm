import { Col, Row } from "antd";
import "./style-card.css";
interface TrendingProps {
  stt: number;
  title: string;
  view: number;
}

const CardTrending = ({ stt, title, view }: TrendingProps) => {
  return (
    <div className="card-trending">
      <Row gutter={16}>
        <Col span={4}>
          <div className="number-stt">{stt}</div>
        </Col>
        <Col>
          <div>{title}</div>
          <div>Lượt xem: {view}</div>
          <div>Đánh giá</div>
        </Col>
      </Row>
    </div>
  );
};
export default CardTrending;
