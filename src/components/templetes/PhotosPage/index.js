import React from "react";
import { connect } from "react-redux";
import PhotosPageOrganisms from '../../organisms/PhotosPage';

import {
    adminGetPhotos,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminPhotos: state?.user?.adminPhotos
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetPhotos: payload => dispatch(adminGetPhotos(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPageOrganisms);