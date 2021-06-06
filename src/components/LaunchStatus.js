import React from "react";

const LaunchStatus = ({ net, status, failreason, holdreason }) =>
{
    let statusCode = status !== null ? status.id : 2;

    return(
        <>
            <div><i className="icon calendar"></i><b>NET</b>: {" "} {net}</div>
            <div><i className="icon check circle"></i><b>Status</b>: {" "}
                <span className={statusCode === 3 ? "ui green text" : null}>
                    {status.name}
                </span>
            </div>
            <div>
                {failreason !== ""
                    ? <span className="ui error text">{failreason}</span>
                    : null
                }
            </div>
            <div>
                {holdreason !== ""
                    ? <span className="ui warning text">{holdreason}</span>
                    : null
                }
            </div>
        </>
    );
}

export default LaunchStatus;