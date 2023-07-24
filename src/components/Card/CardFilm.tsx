import "./style-card.css";
interface CardProps {
  count: number;
  total: number;
  poster: string;
  title: string;
}

const CardFilm = ({ count, total, title, poster }: CardProps) => {
  return (
    <div className="card-film">
      <div className="episodes">
        Tập {count}/{total} Vietsub
      </div>

      <div>
        <img src={poster} alt="" width="100%" height="auto" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
};
export default CardFilm;
