import React from "react";

const LaunchHeader = ( {status, mission} ) =>
{
    let statusCode = status !== null 
        ? status.id 
        : 2;
    let missionName = mission !== null 
        ? mission.name 
        : "Unknown";

    let missionType = mission !== null 
        ? mission.type 
        : "";

    return(
        <>
            <div className="header">
            <i className={statusCode !== 3 
                ? "icon satellite dish"
                : "icon green satellite dish"} /> 
            {missionName}
        </div>
        {(mission !== null && mission.orbit !== null)
            ? <div className="right floated meta">{mission.orbit.abbrev}</div>
            : null
        }
        <div className="meta">{missionType}</div>
    </>
    );
}

export default LaunchHeader;