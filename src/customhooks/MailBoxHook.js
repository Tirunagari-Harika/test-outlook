import React from "react";
import { getRequest } from "../services/serviceApis";
import CONSTANTS from "../constants/constants";
import utilities from "../utilities/utilities";

const useMailBoxHook = (foldersJson, folderApiStatus) => {

    const [mailBoxItems, setMailBoxItems] = React.useState({});
    const [settledStatus, setsettledStatus] = React.useState(CONSTANTS.service_status.loading);
    const [apiStatus, setapiStatus] = React.useState(CONSTANTS.service_status.loading);


    const statusObj = {
        fulfilled: "fulfilled",
        rejected: "rejected"
    }

    const updateMailBox = (data) => {
        setMailBoxItems(data);
    }

    const formHttpCalls = () => {
        let arr = [];
        for (let i = 0; i < foldersJson.length; i++) {
            arr.push(getRequest(foldersJson[i].folderApiUrl));
        }
        return arr;
    }

    const mapToMailBoxState = (res) => {
        let mailBox = {};
        let apiStatus = CONSTANTS.service_status.success;

        for (let i = 0; i < res.length; i++) {
            if (res[i].status === statusObj.fulfilled) {
                mailBox = {
                    ...mailBox,
                    [foldersJson[i].routeKey]: res[i].value.data
                };
            } else {
                mailBox = {
                    ...mailBox,
                    [foldersJson[i].routeKey]: []
                }

                apiStatus = CONSTANTS.service_status.error;
            }
        }

        setapiStatus(apiStatus);
        setMailBoxItems(mailBox);
        setsettledStatus(CONSTANTS.service_status.success);


    }

    const apiCalls = () => {
        Promise.allSettled([...formHttpCalls()]).then((res) => {
            mapToMailBoxState(res);

        }).catch((err) => {
            console.log("useMailBoxHook: ", err);
        });
    }

    React.useEffect(() => {
        if (folderApiStatus === CONSTANTS.service_status.success) {
            apiCalls();
        }
    }, [folderApiStatus]);


    return {
        mailBoxItems,
        apiStatus,
        settledStatus,
        updateMailBox
    }
}

export default useMailBoxHook;
