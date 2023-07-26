import CardMin from "../Card/CardFilm_Min";
import CardTrending from "../Card/CardTrending";

const Recommend = () => {
  const Film_ComingSoon = [
    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },
    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },
    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },
    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },

    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },
    {
      poster: "",
      title: "Xinchaoban",
      view: 100,
    },
  ];
  const FilmTrending = [
    { stt: 1, title: "Ten toi la", view: 1000 },
    { stt: 2, title: "Ten toi la", view: 1000 },
    { stt: 3, title: "Ten toi la", view: 1000 },
    { stt: 4, title: "Ten toi la", view: 1000 },
    { stt: 5, title: "Ten toi la", view: 1000 },
    { stt: 6, title: "Ten toi la", view: 1000 },
    { stt: 7, title: "Ten toi la", view: 1000 },
    { stt: 8, title: "Ten toi la", view: 1000 },
    { stt: 9, title: "Ten toi la", view: 1000 },
    { stt: 10, title: "Ten toi la", view: 1000 },
  ];
  return (
    <div>
      <div>
        <h2
          style={{
            marginBottom: "32px",
            borderBottom: "1px dotted #f2f2f2 ",
            paddingBottom: "10px",
            color: "#fff",
          }}
        >
          Trending
        </h2>
        {FilmTrending.map((item, index) => (
          <CardTrending
            key={index}
            view={item.view}
            title={item.title}
            stt={item.stt}
          />
        ))}
      </div>
      <div>
        <h2
          style={{
            margin: "30px 0px",
            borderBottom: "1px dotted #f2f2f2 ",
            paddingBottom: "10px",
            color: "#fff",
          }}
        >
          Sắp chiếu
        </h2>
        {Film_ComingSoon.map((item, index) => (
          <CardMin
            key={index}
            poster={item.poster}
            view={item.view}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};
export default Recommend;
