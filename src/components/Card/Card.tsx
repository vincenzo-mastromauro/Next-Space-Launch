import Falcon9 from "@/3DModelsComp/Falcon9/Falcon9";
import Satellite from "@/3DModelsComp/Satellite/Satellite";
import React from "react";

const handleVeichle = (vehicle: string) => {
  switch (vehicle) {
    case "Falcon 9":
      return <Falcon9 />;
    case "Proton-M":
      return <Satellite />;
    case "Soyuz-2":
      return <Satellite />;
    default:
      return <Falcon9 />;
  }
};

const Card = (props: any) => {
  return (
    <div style={{ height: "100vh" }}>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.launch_description}</p>
      <p>{props.provider.name}</p>
      <p>{props.vehicle.name}</p>
      <p>{props.pad.name}</p>
      <p>{props.pad.location.name}</p>
      <p>{props.pad.location.statename}</p>
      <p>{props.t0}</p>
      <div>{handleVeichle(props.vehicle.name)}</div>
    </div>
  );
};

export default Card;
