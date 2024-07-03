import React from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
import Directory from "../../../utilities/Directory"

const NotFoundPage = () => {
    const navigate = useNavigate()
    const location = useLocation().pathname

    const BackHome = () => {
        if(sessionStorage.getItem("language") === "en") {
            navigate(Directory.EN)
        } else {
            navigate(Directory.AR)
        }
    };

    return (
        <div className="error-section">
            <div className="error-section-content">
                <div className="image-layer"></div>
                <h2 className="secondary-title-white">Page Not Found</h2>
                <p>The Page you requested could not be Found </p>
                <button className="button-black"
                      onClick={BackHome}>Back Home</button>
            </div>
        </div>

    )
}

export default NotFoundPage