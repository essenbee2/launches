import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const launchLibraryUrl = "https://lldev.thespacedevs.com/launch/upcoming";

function useLaunchLibrary()
{
    const [launchData, setlaunchData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    useEffect(() => {
      async function getLaunchData() {
        try {
          const data = await axios.get(launchLibraryUrl);
          setRequestStatus(REQUEST_STATUS.SUCCESS);
          setlaunchData(data.results);
        } catch (e) {
          setRequestStatus(REQUEST_STATUS.FAILURE);
          setError(e);
        }
      }
      
      getLaunchData();
    }, []);

    return {
        launchData,
        requestStatus,
        error,
      };
};

export default useLaunchLibrary;