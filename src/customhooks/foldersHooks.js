import React from "react";
import SERVICE_URLS from "../constants/serviceUrls";
import { getRequest } from "../services/serviceApis";
import CONSTANTS from "../constants/constants";

const useFoldersApi = () => {
    const [folders, setFolders] = React.useState([]);
    const [apiStatus, setapiStatus] = React.useState(CONSTANTS.service_status.loading);

    React.useEffect(() => {
        getRequest(SERVICE_URLS.foldersUrls).then((res) => {
            if (!res.data.length) {
                setapiStatus(CONSTANTS.service_status.error);
            } else {
                setFolders(res.data);
                setapiStatus(CONSTANTS.service_status.success);
            }
        }).catch((err) => {
            console.log("Folders: ", err);
            setapiStatus(CONSTANTS.service_status.error);
        });
    }, []);

    return {
        folders,
        foldersApiStatus: apiStatus
    }

}

export default useFoldersApi;