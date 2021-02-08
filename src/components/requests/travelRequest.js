import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Spinner,
  Alert,
  Input,
} from "reactstrap";
import "./travelRequest.scss";
import { CreateTropRequest } from "../../../redux/actions/tripRequest";

const isValid = ({ target }) => {
  if (target.value.length < 1) {
    target.classList.add("is-invalid");
    target.classList.remove("is-valid");
  } else {
    target.classList.remove("is-invalid");
    target.classList.add("is-valid");
  }
};

const TravelRequest = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const [color, setColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [sendButton, setButton] = useState(true);
  const [requestData, SetRequestData] = useState({
    origin: null,
    destination: null,
    from: "",
    till: "",
    travelReasons: "",
    accomodationId: null,
  });

  const dispatch = useDispatch();
  const { err, response } = useSelector((state) => state.tripRequest);
  const locations = useSelector((state) => state.locations.locations);
  const accomodationsObj = useSelector(
    (state) => state.accommodation.accomodationsObj
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetRequestData((requestData) => ({
      ...requestData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("data", requestData);
    setLoading(true);
    dispatch(CreateTropRequest(requestData));
  };

  useEffect(() => {
    if (response) {
      setLoading(false);
      setMessage(response);
      setButton(false);
      setVisible(true);
      setColor("success");
      setTimeout(() => {
        setVisible(false);
        setButton(true);
        //window.location = "./";
      }, 5000);
    }
    if (err) {
      setLoading(false);
      setMessage(err);
      setButton(false);
      setVisible(true);
      setColor("danger");
      setTimeout(() => {
        setVisible(false);
        setButton(true);
      }, 5000);
    }
  }, [err, response, dispatch]);

  return (
    <div>
      <Container>
        <h2 className="header">Create Travel Request</h2>
        <Form className="form" onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label className="align-left" for="exampleSelect">
                  Location
                </Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="select"
                  name="origin"
                  onChange={handleChange}
                  value={requestData.origin}
                  id="origin"
                >
                  {locations.map((location, index) => (
                    <option value={location.id} key={location.id}>
                      {location.country}({location.city})
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Destination</Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="select"
                  onChange={handleChange}
                  value={requestData.destination}
                  name="destination"
                  id="destination"
                >
                  {locations.map((location, index) => (
                    <option value={location.id} key={location.id}>
                      {location.country}({location.city})
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="from"
                  id="from"
                  onChange={handleChange}
                  value={requestData.from}
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Return Date</Label>
                <Input
                  type="date"
                  name="till"
                  id="till"
                  onChange={handleChange}
                  value={requestData.till}
                />
              </FormGroup>
            </Col>
            <Col md={9}>
              <FormGroup>
                <Label>Reason</Label>
                <Input
                  type="text"
                  className="input"
                  onBlur={isValid}
                  onChange={handleChange}
                  value={requestData.travelReasons}
                  name="travelReasons"
                  id="travelReasons"
                />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label>Accommodation</Label>
                <Input
                  className="input"
                  onBlur={isValid}
                  type="select"
                  onChange={handleChange}
                  name="accomodationId"
                  value={requestData.accomodationId}
                  id="accomodationId"
                >
                  {accomodationsObj.map((accom, index) => (
                    <option value={accom.id} key={accom.id}>
                      {accom.facilityName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <center>
            <div className="response">
              {loading && <Spinner color="primary" />}
              <Alert isOpen={visible} color={color}>
                {message}
              </Alert>
            </div>
            {sendButton && !loading && (
              <Button type="submit" className="button">
                Submit
              </Button>
            )}
          </center>
        </Form>
      </Container>
    </div>
  );
};

export default TravelRequest;
