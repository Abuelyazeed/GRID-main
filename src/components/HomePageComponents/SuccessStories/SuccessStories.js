import React from 'react';
import {Link} from "react-router-dom";
import Directory from "../../../utilities/Directory"

const SuccessStories = () => {
    return (
        <div>
            SuccessStories
            <Link className="button-purple" to={Directory.NEWS}>Views News</Link>
        </div>
    );
};

export default SuccessStories;