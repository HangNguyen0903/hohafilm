import CardMin from "../Card/CardFilm_Min";

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
  return (
    <div>
      <div>
        <h3
          style={{
            marginBottom: "32px",
            borderBottom: "1px dotted #f2f2f2 ",
            paddingBottom: "10px",
          }}
        >
          Trending
        </h3>
        {Film_ComingSoon.map((item, index) => (
          <CardMin
            key={index}
            poster={item.poster}
            view={item.view}
            title={item.title}
          />
        ))}
      </div>
      <div>
        <h3
          style={{
            marginBottom: "32px",
            borderBottom: "1px dotted #f2f2f2 ",
            paddingBottom: "10px",
          }}
        >
          Sắp chiếu
        </h3>
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
