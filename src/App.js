import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faCirclePause, faCirclePlay, faCircleStop } from '@fortawesome/free-solid-svg-icons';
import ClockSessionBreak from "./ClockSessionBreak";

function App() {
  return (
    <div className="App">
      <ClockSessionBreak />
    </div>
  );
}

export default App;
