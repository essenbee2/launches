import React from "react";
import RocketImage from "./RocketImage";

const Rocket = ({ launch }) => {
  const url = launch.image;
  const name = launch.rocket.configuration.name;

  return (
    <>
      <RocketImage url={url} alt={name} />
      <div className="header">
        <i className="icon rocket" /> {name}
      </div>
      <div className="meta">
        {launch.launch_service_provider.name}
        {launch.webcast_live ? (
          <i className="right floated large icon red youtube"></i>
        ) : null}
      </div>
    </>
  );
};

export default Rocket;
