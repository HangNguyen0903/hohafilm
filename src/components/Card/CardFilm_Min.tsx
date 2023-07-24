interface CardMinProps {
  poster: string;
  title: string;
  view: number;
}
const CardMin = ({ poster, title, view }: CardMinProps) => {
  return (
    <div className="card-min">
      <div className="img-poster-min">
        <img src={poster} alt="" />
      </div>

      <div>
        <h4>{title}</h4>
        <p>Luot xem :{view}</p>
        <p>Đánh giá</p>
      </div>
    </div>
  );
};
export default CardMin;
