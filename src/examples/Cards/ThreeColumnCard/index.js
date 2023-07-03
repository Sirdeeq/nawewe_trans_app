import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

function ThreeColumnCard({ image, title, description, bgColor }) {
  return (
    <Card>
      <SoftBox display="flex" alignItems="center" p={2} bgColor={bgColor}>
        <SoftBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="4rem"
          height="4rem"
          borderRadius="lg"
          marginRight={2}
        >
          <div style={{ width: "100%" }}>
            <img src={image} style={{ width: "100%" }} />
          </div>
        </SoftBox>
        <SoftBox flex={1}>
          <SoftTypography variant="h6" fontWeight="medium" color="black" textTransform="capitalize">
            {title}
          </SoftTypography>
          {description && (
            <SoftTypography variant="caption" color="black" fontWeight="regular">
              {description}
            </SoftTypography>
          )}
        </SoftBox>
        <Divider />
      </SoftBox>
    </Card>
  );
}

ThreeColumnCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  bgColor: PropTypes.string,
};

export default ThreeColumnCard;
