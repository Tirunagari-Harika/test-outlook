import React from "react";
import "./styles.css";
import CONSTANTS from "../../constants/constants";

const NoMailSelected = () => {
    return (<div className="nomail_selected">
        <div>{CONSTANTS.mail_area.header}</div>
        <div>{CONSTANTS.mail_area.sub_header}</div>
    </div>)
}

export default NoMailSelected;