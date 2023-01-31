import Button from "../Button/Button";
import Card from "../Card/Card";
import "./Modal.css";
import ReactDOM from "react-dom";

const Modal = (props) => {
  const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm}></div>;
  };
  const ModalOverlay = (props) => {
    <Card>
      <header>
        <h2>{props.title}</h2>
      </header>
      <div>{props.message}</div>
      <footer>
        <Button>Okay</Button>
      </footer>
    </Card>;
  };
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </div>
  );
};

export default Modal;
