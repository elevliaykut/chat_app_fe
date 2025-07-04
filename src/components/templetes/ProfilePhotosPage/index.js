import React from "react";
import { connect } from "react-redux";
import ProfilePhotosPageOrganisms from '../../organisms/ProfilePhotosPage';

import {
    userLogout,
    adminGetProfilePhotos,
    adminApproveProfilePhoto,
    adminApproveProfilePhotoReset
} from '../../../store/user/actions';

const mapStateToProps = state => ({
    isLoading: state?.user?.isLoading,
    error: state?.user?.error,
    adminProfilePhotos: state?.user?.adminProfilePhotos,
    adminApproveProfilePhotoComplete: state?.user?.adminApproveProfilePhotoComplete
});

const mapDispatchToProps = dispatch => ({
    userLogout: () => dispatch(userLogout()),
    adminGetProfilePhotos: payload => dispatch(adminGetProfilePhotos(payload)),
    adminApproveProfilePhoto: payload => dispatch(adminApproveProfilePhoto(payload)),
    adminApproveProfilePhotoReset: () => dispatch(adminApproveProfilePhotoReset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePhotosPageOrganisms);