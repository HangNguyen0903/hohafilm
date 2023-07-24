import { Modal } from "antd";

interface SignUp {
  openModal: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp = ({ openModal, setOpenModel }: SignUp) => {
  return (
    <div>
      <Modal
        title="Vertically centered modal dialog"
        centered
        open={openModal}
        onOk={() => setOpenModel(false)}
        onCancel={() => setOpenModel(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </div>
  );
};
export default SignUp;
