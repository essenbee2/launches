import React from "react";
import useLaunchLibrary, { REQUEST_STATUS } from "../hooks/useLaunchLibrary";
import Launch from './Launch';
import ReactPlaceHolder from "react-placeholder";

const Launches = () =>
{
    const {
        launchData: launchData,
        requestStatus,
        error,
      } = useLaunchLibrary();
       
      if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div className="large error error">
            ERROR: <b>Loading Launch Data Failed {error}</b>
          </div>
        );
      }

      if (requestStatus === REQUEST_STATUS.LOADING) 
      {
          return <div>Loading...</div>
      }

    return (
        <div className="ui four stackable raised cards">
            <ReactPlaceHolder
                    type="media"
                    rows={15}
                    ready={requestStatus === REQUEST_STATUS.SUCCESS}
            >
                { launchData.map((launch) =>
                    (
                        <Launch launch={launch} />
                    )
                )}
            </ReactPlaceHolder>
      </div>
    );
}

export default Launches