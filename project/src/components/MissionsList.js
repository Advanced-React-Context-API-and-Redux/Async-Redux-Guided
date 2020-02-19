import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const MissionsList = props => {

    // useEffect(() => {
    //     props.getData();
    // }, [])

    return(
        <div>
            {props.error ? 
                <div className="error">{props.error}</div> 
            : 
                props.missions.map(mission => (
                <div>{mission.mission_name}</div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        missions: state.missions,
        error: state.error
    }
}

export default connect(
        mapStateToProps, 
        { getData }
    )(MissionsList)