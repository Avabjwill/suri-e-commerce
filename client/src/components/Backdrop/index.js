import "./background.css";

const Backdrop = ({ click, show }) => {
  return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;