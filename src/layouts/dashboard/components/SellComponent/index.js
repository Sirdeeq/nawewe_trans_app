import React from "react";
import SoftBox from "components/SoftBox";
import ThreeColumnCard from "examples/Cards/ThreeColumnCard";

export default function Index() {
  return (
    <SoftBox display="flex" flexDirection="column">
      <SoftBox display="flex" justifyContent="space-around" marginBottom={2}>
        <ThreeColumnCard
          image={require("../../../../assets/images/img3.png")}
          title="Discover"
          description="Find drivers, passengers and other services"
          bgColor="#FAD6A5"
        />
        <ThreeColumnCard
          image={require("../../../../assets/images/img2.png")}
          title="Your OnGoing Trip"
          description="You have a trip ongoing from oshodi to lekki"
          linkText="Tap to view more"
          bgColor="#311414"
        />
        <ThreeColumnCard
          image={require("../../../../assets/images/img4.png")}
          title="Driving Plans"
          description="Signify Intent to the drive create destination"
          bgColor="#F9E6C9"

        />
      </SoftBox>
      <SoftBox display="flex" justifyContent="space-around">
        <ThreeColumnCard
          image={require("../../../../assets/images/img5.png")}
          title="Passengers Plans"
          description="Signify Intent to be a passenger"
          bgColor="#FDF4A2"
        />
        <ThreeColumnCard
          image={require("../../../../assets/images/img1.png")}
          title="Private Groups"
          description="Privacy Security, Ride with family and friends"
          bgColor="#CCECD9"
        />
      </SoftBox>
    </SoftBox>
  );
}
