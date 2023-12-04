import React, { useState } from 'react';

const AddEmail = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddEmailClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <div>
        <h4>Suppressed email</h4>
        <hr />
        <div className="img-box">
          <img
            className="image"
            src={process.env.PUBLIC_URL + '/assets/sent-icon.png'}
            alt="template"
          />
          <p>Emails will not be sent to the email addresses added here</p>
          <button className="global-btn" onClick={handleAddEmailClick}>
            Add Email
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Add Email</h2>
            <input type="email" placeholder="Enter email" />
            <button onClick={handlePopupClose}>
              <span className="close" onClick={handlePopupClose}>
                &times;
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEmail;
