import { Col, Row } from "antd";
import "./cate.css";
import CardFilm from "../../components/Card/CardFilm";
import Recommend from "../../components/Recommend";
import BreadcrumbCustom from "../../components/Breadcrumb";
import SelectCustom from "../../components/Select";
import PaginationCustom from "../../components/Pagination";
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

      <Row
        style={{ margin: "20px 0px", background: "#191919", padding: "20px 0" }}
        gutter={20}
      >
        <Col span={18}>
          <Row gutter={10} className="filter">
            <Col>
              <SelectCustom />
            </Col>
            <Col>
              <SelectCustom />
            </Col>
            <Col>
              <SelectCustom />
            </Col>
            <Col>
              <SelectCustom />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }} gutter={[10, 16]}>
            {FilmHot.map((item, index) => (
              <Col span={6} style={{ paddingRight: "20px" }}>
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
          <div className="pagination">
            <PaginationCustom />
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
