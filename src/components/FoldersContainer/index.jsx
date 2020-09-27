import React from "react";
import PropTypes from "prop-types";
import outlookPrototypeContext from "../../context";
import "./styles.css";
import FolderItem from "../FolderItem";
import utilities from "../../utilities/utilities";
import CONSTANTS from "../../constants/constants";

const FolderContainer = (props) => {
    const ctx = React.useContext(outlookPrototypeContext);

    const setUnRead = (routeKey) => {
        if (!utilities.isEmptyObject(ctx.mailBoxItems)) {
            return utilities.calculateSelection(ctx.mailBoxItems[routeKey], CONSTANTS.mail_Keys.unread);
        }

        return 0;
    }

    return (<div className={"filter-container-styles"}>
        {props.folders.map((ele) => {

            return (<FolderItem
                linkName={ele.displayName}
                routePath={`/folders/${ele.routeKey}`}
                key={ele.folderId}
                unreads={setUnRead(ele.routeKey)}
            />)
        })}

    </div>)
}

export default FolderContainer;

const folderType = {
    displayName: PropTypes.string.isRequired,
    routeKey: PropTypes.string.isRequired
}

FolderContainer.propTypes = {
    folders: PropTypes.arrayOf(PropTypes.shape(folderType))
};
