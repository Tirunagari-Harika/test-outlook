import React from "react";
import { Route } from "react-router-dom";
import "./styles.css";
import outlookPrototypeContext from "../../context";
import Header from "../Header";
import Footer from "../Footer";
import useFoldersApi from "../../customhooks/foldersHooks";
import useMailBoxHook from "../../customhooks/MailBoxHook";
import MailBoxContainer from "../MailBoxContainer";
import FolderContainer from "../FoldersContainer";
import CONSTANTS from "../../constants/constants";
import ROUTES from "../../constants/routes";
import utilities from "../../utilities/utilities";
import MailTextArea from "../MailTextArea";
import NoMailSelected from "../NoMailSelected";


const OultlookEmail = (props) => {

    const { folders, foldersApiStatus } = useFoldersApi();
    const { apiStatus, mailBoxItems, settledStatus, updateMailBox } = useMailBoxHook(folders, foldersApiStatus);

    React.useEffect(() => {
        console.log("Its Call", mailBoxItems);
        if (!utilities.isEmptyObject(mailBoxItems)) {

        }
    }, [mailBoxItems]);

    React.useEffect(() => {

    }, [settledStatus]);

    const findItemIndexInFolder = (routeKey, mId) => {
        return utilities.findEleIndex(mailBoxItems[routeKey], "mId", mId);
    }

    const changeMailItemControl = (routeKey, mId, key, value) => {
        let index = findItemIndexInFolder(routeKey, mId);
        if (index !== -1) {
            let mailItems = { ...mailBoxItems, [routeKey]: [...mailBoxItems[routeKey]] };
            mailItems[routeKey][index][key] = value;
            updateMailBox(mailItems);
        }
    }

    const markMailItemReadOrUnRead = (routeKey, mId, readValue) => {
        changeMailItemControl(routeKey, mId, "unread", readValue);
    }

    const markFlagOnItem = (routeKey, mId, flag) => {
        changeMailItemControl(routeKey, mId, "flagged", flag);
    }

    const deletionHandler = (routeKey, mId) => {
        let index = findItemIndexInFolder(routeKey, mId);
        if (index !== -1) {
            let mailItems = {
                ...mailBoxItems,
                [routeKey]: [...mailBoxItems[routeKey]],
                [CONSTANTS.resources_deletionFolder]: [...mailBoxItems[CONSTANTS.resources_deletionFolder]]
            };

            let arr = mailItems[routeKey].splice(index, 1);

            mailItems = {
                ...mailItems,
                [CONSTANTS.resources_deletionFolder]: [
                    ...mailItems[CONSTANTS.resources_deletionFolder],
                    ...arr
                ]
            }


            updateMailBox(mailItems);
        }
    }


    const ctxVal = {
        mailBoxItems: mailBoxItems,
        markMailItemReadOrUnRead: markMailItemReadOrUnRead,
        markFlagOnItem: markFlagOnItem,
        deletionHandler: deletionHandler,
        defaultFilterControl: CONSTANTS.default_filterControl
    }

    console.log("Test", ctxVal);

    return (<React.Fragment>
        <Header />
        OutlookEmail
        <outlookPrototypeContext.Provider value={ctxVal}>
            <div className={"outlook-proto"}>
                {foldersApiStatus === CONSTANTS.service_status.success ? (<React.Fragment>
                    <FolderContainer folders={folders} />

                    <Route path="/folders/:mailbox" component={MailBoxContainer} />
                </React.Fragment>) : null}
                {/* <MailTextArea /> */}
                <NoMailSelected />
            </div>


            <Footer totalItems={5000} status={"Loading..."} />
        </outlookPrototypeContext.Provider>

    </React.Fragment>)
}

export default OultlookEmail;