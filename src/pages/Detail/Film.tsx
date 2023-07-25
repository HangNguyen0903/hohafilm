import { Button, Col, Row } from "antd";
import BreadcrumbCustom from "../../components/Breadcrumb";
import Recommend from "../../components/Recommend";
import CardDetail from "../../components/Card/CardDetail";

const Film = () => {
  return (
    <div>
      <BreadcrumbCustom />
      <Row>
        <Col span={18}>
          <div>
            <Row gutter={20}>
              <Col span={10}>
                <CardDetail poster="" />
              </Col>
              <Col span={12}>
                <h2>Tiêu đề</h2>
                <h2>Title (2023)</h2>
                <div></div>
                <div>
                  <Row>
                    <Col>
                      <Button>Thích</Button>
                      <Button>Chia sẻ</Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col span={6}>
          <Recommend />
        </Col>
      </Row>
    </div>
  );
};
export default Film;
