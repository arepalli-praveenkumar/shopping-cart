import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

class Spinner extends React.Component {

    render() {
        return (
            <div className="loading-bar">
                <FontAwesomeIcon icon={faCog} size="lg" spin>Please wait...</FontAwesomeIcon>
            </div>
        )
    }

}

export default Spinner;