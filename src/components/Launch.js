import React from "react";
import LaunchHeader from "./LaunchHeader";
import LaunchStatus from "./LaunchStatus";
import Rocket from "./Rocket";

const Launch = ({ launch }) =>
{
    const status = launch.status;
    const net = launch.net;
    const failreason = launch.failreason;
    const holdreason = launch.holdreason;
    const mission = launch.mission;

    return(
    <div className="ui link card" key={launch.id} >
        <div className="content">
            <LaunchHeader status={status} mission={mission} />
            <Rocket launch={launch} />
            <div className="ui divider" />
            <LaunchStatus net={net} status={status} failreason={failreason} holdreason={holdreason} />
            <div className="ui divider" />
            <div className="description">
                {launch.mission.description}
            </div>
        </div>
    </div>
    );
}

export default Launch;