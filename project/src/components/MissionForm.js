import React from "react";
import { connect } from "react-redux";

// import that action
import { getData } from "../actions";

const MissionForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    }

    return(
        <div>
            {props.isFetchingData ? (
                <div>**we are fetching data**</div>
            ) : (
                <button onClick={handleGetData}>Get Data</button>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, {getData})(MissionForm);