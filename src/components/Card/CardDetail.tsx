import { Button } from "antd";
import "./style-card.css";
interface CardProps {
  poster: string;
}

const CardDetail = ({ poster }: CardProps) => {
  return (
    <div className="card-film">
      <div>
        <img src={poster} alt="" width="100%" height="auto" />
      </div>
      <div className="title">
        <Button>Xem ngay</Button>
        <Button>Tải phim</Button>
      </div>
    </div>
  );
};
export default CardDetail;
