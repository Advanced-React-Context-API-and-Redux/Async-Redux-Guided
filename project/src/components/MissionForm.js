import React from "react";
import { connect } from "react-redux";

const MissionForm = props => {
    return(
        <div>
            {props.isFetchingData ? (
                <div>**we are fetching data**</div>
            ) : (
                <button>Get Data</button>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, {})(MissionForm);