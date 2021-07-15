import React from 'react'
import NavbarStyles from './styles/navbar.module.scss';
const AdminInfo = () => {
    return (
        <div className="w-100 d-flex flex-wrap">
            <div className="w-25 mr-3 ">
                <img
                    src="https://storage.googleapis.com/mmc-elcaribe-bucket/uploads/2021/06/213965b5-dogs_1280p_0-60ba19d1d2c8c.jpg"
                    alt="image-1"
                    className={`${NavbarStyles.profilePicture}`}
                />
            </div>

            <div className="w-75 d-flex flex-column justify-content-center">
                <p className="font-weight-bold font-italic">@User</p>
                <p className="mt-2">Sign out</p>
            </div>
        </div>


    )
}

export default AdminInfo;
