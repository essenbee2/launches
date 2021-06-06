import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const launchLibraryUrl = "https://ll.thespacedevs.com/2.0.0/launch/upcoming/?format=json&limit=12";

function useLaunchLibrary()
{
    const [launchData, setlaunchData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    console.log(`URL = ${launchLibraryUrl}`);

    useEffect(() => {
      async function getLaunchData() {
        try {
          const result = await axios.get(launchLibraryUrl);
          setRequestStatus(REQUEST_STATUS.SUCCESS);
          setlaunchData(result.data.results);
        } catch (e) {
          setRequestStatus(REQUEST_STATUS.FAILURE);
          setError(`${e}`);
        }
      }
      
      getLaunchData();
    }, []);

    console.log(`data = ${launchData}`);
    console.log(`status = ${requestStatus}`);
    console.log(`error = ${error}`);

    return {
        launchData,
        requestStatus,
        error,
      };
};

export default useLaunchLibrary;