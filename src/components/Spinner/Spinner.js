import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import "./Spinner.css"

class Spinner extends React.Component {

    render() {
        return (
            <div className="loading-bar"> 
                <FontAwesomeIcon icon={faCog} size="lg" spin></FontAwesomeIcon>
                <p>Please wait...</p>
            </div>
        )
    }

}

export default Spinner;