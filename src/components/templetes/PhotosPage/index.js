import React from "react";
import { connect } from "react-redux";
import PhotosPageOrganisms from '../../organisms/PhotosPage';

import {
    adminGetPhotos,
    adminApprovePhoto,
    adminApprovePhotoReset,
    userLogout
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminPhotos: state?.user?.adminPhotos,
    adminApprovePhotoComplete: state?.user?.adminApprovePhotoComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetPhotos: payload => dispatch(adminGetPhotos(payload)),
    adminApprovePhoto: payload => dispatch(adminApprovePhoto(payload)),
    adminApprovePhotoReset: () => dispatch(adminApprovePhotoReset()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPageOrganisms);