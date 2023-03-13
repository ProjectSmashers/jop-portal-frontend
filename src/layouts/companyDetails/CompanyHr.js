// react-router-dom components
import { Link } from "react-router-dom";

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import BasicLayout from "layouts/authentication/basicLayout";

import Axios from "axios";

// HR Details
function CompanyHr() {
  const [email, setEmail] = useState("");
  const [mobileNo, setMobile] = useState("");
  //   const [aboutCompany, setAboutCompany] = useState();

  const save = () => {
    Axios.put(
      "http://localhost:7000/api/company/6405953e13e0468686ee043d/updatehrdetails/",
      {
        email,
        mobileNo,
      }
    )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Fill HR Details Details
          </MDTypography>
        </MDBox>

        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="email"
                name="email"
                value={email}
                label="HR Email"
                fullWidth
                onChange={(event) => setEmail(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mb={2}>
              <MDInput
                type="number"
                name="mobileNo"
                value={mobileNo}
                label="Mobile No"
                fullWidth
                onChange={(event) => setMobile(event.target.value)}
                // onChange={handleChange}
              />
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                fullWidth
                onClick={save}
              >
                Save
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="success"
                fullWidth
                href="/dashboard"
              >
                Dashboard
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default CompanyHr;
