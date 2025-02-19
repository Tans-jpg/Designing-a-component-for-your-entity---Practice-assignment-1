import React from 'react';
import './UserCard.css'; // Assuming you have a CSS file for styling

const UserCard = () => {
    // Static user details
    const profilePhoto = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F42332098-default-avatar-profile-icon-grey-photo-placeholder-female-no-photo-images-for-unfilled-user-profile-greyscale-vector-illustration-for-socail-media-web&psig=AOvVaw1xUihLIaNVXdnKbtPb_E9H&ust=1740026579198000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjPxab2zosDFQAAAAAdAAAAABAE'; // Placeholder image
    const name = 'TANVI AGARWAL';
    const email = 'tanvi@example.com';
    const phoneNumber = '1234567890';
    const address = '123 street';

    return (
        <div className="user-card">
            <img src={profilePhoto} alt="Profile" className="profile-photo" />
            <div className="user-details">
                <h2 className="user-name">{name}</h2>
                <p className="user-email">Email: {email}</p>
                <p className="user-phone">Phone: {phoneNumber}</p>
                <p className="user-address">Address: {address}</p>
            </div>
        </div>
    );
};

export default UserCard;