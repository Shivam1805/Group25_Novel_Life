import React from "react";
import "./positivecheck.css";
import { Row } from "antd";

const positivecheck = () => {
  return (
    <Row style={{ justifyContent: "center", height: "100%", width: "100%" }}>
      <div
        className="checkwrap3"
        style={{
          justifyContent: "center",
          height: "100%",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "35px",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            textAlign: "center",
          }}
        >
          <b
            style={{
              justifyContent: "center",
              align: "center",
              color: "#FFFF",
              textAlign: "center",
            }}
          >
            You are eligible for CESB and CEWS
          </b>
        </p>
        <a
          style={{ fontSize: "18px", textDecoration: "underline" }}
          href="https://www.canada.ca/en/services/benefits/covid19-emergency-benefits.html"
        >
          Know more
        </a>
      </div>
    </Row>
  );
};
export default positivecheck;
