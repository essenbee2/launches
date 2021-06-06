import React, { useContext } from "react";
import useLaunchLibrary, { REQUEST_STATUS } from "../hooks/useLaunchLibrary";
import Launch from './Launch';
import ReactPlaceHolder from "react-placeholder";
import { SearchContext } from "../contexts/SearchContext";

const Launches = () =>
{
    const { searchTerm } = useContext(SearchContext);

    const {
        launchData,
        requestStatus,
        error,
      } = useLaunchLibrary(searchTerm);
      
      if (requestStatus === REQUEST_STATUS.FAILURE) {
        return (
          <div>
              <span className="ui large error text">
                    <b>Loading Launch Library Data Failed with {error}</b>
                </span>
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
                    ready={requestStatus === REQUEST_STATUS.SUCCESS} >
                { launchData
                    .filter((item) =>
                        {
                            let company = item.launch_service_provider?.name ?? "";
                            let rocket = item.rocket?.configuration?.name ?? "";
                            let mission = item.mission?.name ?? "";

                            return(
                                company
                                    .toLowerCase()
                                    .includes(searchTerm) ||
                                rocket
                                    .toLowerCase()
                                    .includes(searchTerm) ||
                                mission
                                    .toLowerCase()
                                    .includes(searchTerm)
                            );
                        })
                    .map((launch) =>
                    (
                        <Launch launch={launch} />
                    )
                )}
            </ReactPlaceHolder>
      </div>
    );
}

export default Launches