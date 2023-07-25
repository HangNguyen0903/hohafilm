import { Col, Pagination, Row, Select } from "antd";
import "./cate.css";
import CardFilm from "../../components/Card/CardFilm";
import Recommend from "../../components/Recommend";
import BreadcrumbCustom from "../../components/Breadcrumb";
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

const Category = () => {
  return (
    <div className="category">
      <BreadcrumbCustom />
      <Row gutter={20} className="filter">
        <Col>
          <Select placeholder="Sắp xếp" />
        </Col>
        <Col>
          <Select placeholder="The loai" />
        </Col>
        <Col>
          <Select placeholder="Quốc gia" />
        </Col>
        <Col>
          <Select placeholder="Năm" />
        </Col>
      </Row>
      <Row>
        <Col span={18}>
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
          <div
            style={{
              marginTop: "30px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pagination defaultCurrent={1} total={50} />;
          </div>
        </Col>
        <Col span={6}>
          <Recommend />
        </Col>
      </Row>
    </div>
  );
};
export default Category;
