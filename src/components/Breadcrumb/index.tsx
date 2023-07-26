import { Breadcrumb } from "antd";
import "./style.css";
const BreadcrumbCustom = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: <a href="">Home</a>,
        },
        {
          title: <a href="">Application Center</a>,
        },
        {
          title: <a href="">Application List</a>,
        },
        {
          title: "An Application",
        },
      ]}
    />
  );
};
export default BreadcrumbCustom;
