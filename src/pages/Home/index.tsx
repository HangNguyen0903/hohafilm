import CardFilm from "../../components/Card/CardFilm";
import "./home-pape.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import "swiper/css/pagination";
import { Row, Tabs, TabsProps, Col } from "antd";
// import Poster from "../../assets/images/poster.jpg";
import CardMin from "../../components/Card/CardFilm_Min";

const FilmHot = [
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
  {
    count: 10,
    total: 16,
    poster: "",
    title: "Hello Kity",
  },
];
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
const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Phim mới`,
    children: (
      <div>
        <Row gutter={[20, 16]}>
          {FilmHot.map((item, index) => (
            <Col span={5}>
              <CardFilm
                key={index}
                count={item.count}
                total={item.total}
                poster={item.poster}
                title={item.title}
              />
            </Col>
          ))}
        </Row>
      </div>
    ),
  },
  {
    key: "2",
    label: `Phim lẻ mới`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Phim đã hoàn thành`,
    children: `Content of Tab Pane 3`,
  },
];
const Home = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <div className="home-page">
      <h2>Phim hot</h2>
      <div>
        <Row>
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {FilmHot.map((item, index) => (
              <SwiperSlide key={index}>
                <CardFilm
                  count={item.count}
                  total={item.total}
                  poster={item.poster}
                  title={item.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </div>
      <div className="body-film">
        {/* Tab film */}
        <Row gutter={20}>
          <Col span={18}>
            <Tabs
              type="card"
              defaultActiveKey="1"
              items={items}
              onChange={onChange}
              style={{ color: "#fff" }}
            />

            <div className="cartoon">
              <h2>Phim hoạt hình</h2>
              <Row gutter={[20, 16]}>
                {FilmHot.map((item, index) => (
                  <Col span={5}>
                    <CardFilm
                      key={index}
                      count={item.count}
                      total={item.total}
                      poster={item.poster}
                      title={item.title}
                    />
                  </Col>
                ))}
              </Row>
            </div>
            <div className="cartoon">
              <h2>Phim yêu thích</h2>
              <Row gutter={[20, 16]}>
                {FilmHot.map((item, index) => (
                  <Col span={5}>
                    <CardFilm
                      key={index}
                      count={item.count}
                      total={item.total}
                      poster={item.poster}
                      title={item.title}
                    />
                  </Col>
                ))}
              </Row>
            </div>
          </Col>

          <Col span={6}>
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
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Home;
