import Button from "@restart/ui/esm/Button";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Modal.css";

const MyVerticallyCenteredModal = (props) => {
  const { user, signInUsingGoogle } = useAuth();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="modal-header-footer">
        <Modal.Title id="contained-modal-title-vcenter">
          Please Login !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 mx-auto ">
              <h2>Welcome to RapidCrew</h2>
              {user.email ? (
                <p>Thank you for signing in</p>
              ) : (
                <p>Please Sign In to continue</p>
              )}
              {user.email ? (
                <h3>Hello, {user.displayName}.</h3>
              ) : (
                <button className="btn-google " onClick={signInUsingGoogle}>
                  Google Sign In
                </button>
              )}
              {user.email ? (
                <Link to="/services">
                  <button className="btn-google">View Services</button>
                </Link>
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="modal-header-footer">
        <h5>We are the fastest courier delivery service in Bangladesh</h5>
        <Button className="btn-cl" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;
