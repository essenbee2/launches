import React from "react";

const LaunchHeader = ( {status, mission} ) =>
{
    
    return(
        <>
            <div className="header">
            <i className={status.id !== 3 
                ? "icon satellite dish"
                : "icon green satellite dish"} /> 
            {mission.name}
        </div>
        {mission.orbit !== null
            ? <div className="right floated meta">{mission.orbit.abbrev}</div>
            : null
        }
        <div className="meta">{mission.type}</div>
    </>
    );
}

export default LaunchHeader;