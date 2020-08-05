import React, { Component } from "react";
import {Row, Col} from "antd";
import { Form } from "react-bootstrap";

class Assistance extends Component {

    constructor(props) {
        super(props);
        this.state = {

          }
      }

    render() { 
        return ( 
            <div style={{ justifyContent: "center" }}>
        <Row style={{ justifyContent: "center" }}>
          <h1
            style={{
              color: "#FFFF",
              fontFamily: "Roboto, sans-serif",
              align: "center",
              justifyContent: "center",
              fontSize: "4em",
              marginTop: "80px",
              marginBottom: "20px",
            }}>
            Seek Assistance
          </h1>
        </Row>

        <Row style={{ justifyContent: "center" }}>
            
            <Col>

            </Col>

        <Col>
          <form
            style={{ width: "350px" }}
            noValidate>
            <Form.Group>
              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="formName"

                placeholder="Name"
              />
              
            </Form.Group>
            <Form.Group>
              <input
                type="email"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="emailID"
                required
                placeholder="Email"
              />
              
            </Form.Group>


            <Form.Group>
              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="phoneNumber"
                noValidate
               
                required
                placeholder="Contact No."
              />
              
            </Form.Group>

            <Form.Group>
              <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="gender"
                placeholder="Gender"
              />

              <input 
              type="number"
              style={{
                backgroundColor: "#011528",
                color: "#2593FC",
                fontFamily: "Roboto Thick, sans-serif",
                fontWeight: "200",
                padding: "10px",
                boxShadow: "none",
                width: "100%",
                marginBottom: "10px",
                borderColor: "#2593FC",
                textColor: "white",
              }}
              name="age"
              placeholder="Age"
              min="1"
              />

            </Form.Group>

            <Form.Group>

            <input
                type="text"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="date"
                placeholder="Date of Assistance: dd/mm/yyyy"
              />

            </Form.Group>

            <Form.Group>
            <textarea
                rows="5"
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="desc"
                placeholder="Describe assistance or task in detail"
              />

            </Form.Group>

            <Form.Group>
            <input
                style={{
                  backgroundColor: "#011528",
                  color: "#2593FC",
                  fontFamily: "Roboto Thick, sans-serif",
                  fontWeight: "200",
                  padding: "10px",
                  boxShadow: "none",
                  width: "100%",
                  marginBottom: "10px",
                  borderColor: "#2593FC",
                }}
                name="contactno"
                placeholder="Enter Contact Info: +1-XXX-XXX-XXXX"
              />

            </Form.Group>

            <button
              type="submit"
              style={{
                fontFamily: "Roboto Thick, sans-serif",
                fontWeight: "500",
                padding: "14px",
                width: "100%",
                height: "50px",
                marginTop: "10px",
                boxShadow: "none",
                backgroundColor: "#2593FC",
                color: "#FFFF",
                borderColor: "#2593FC",
              }}
            >
              Request Assistance
            </button>
          </form>
          </Col>
        </Row>
      </div>
         );
    }
}

export default Assistance;