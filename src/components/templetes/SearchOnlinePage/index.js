import React from "react";
import { connect } from "react-redux";
import SearchOnlineOrganisms from '../../organisms/SearchOnlinePage';

import {
    getOnlineProfiles
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    pageLoading: state?.user?.pageLoading,
    error: state?.user?.error,
    onlineProfiles: state?.user?.onlineProfiles
});

const mapDispatchToProps = dispatch => ({
    getOnlineProfiles: () => dispatch(getOnlineProfiles())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOnlineOrganisms);