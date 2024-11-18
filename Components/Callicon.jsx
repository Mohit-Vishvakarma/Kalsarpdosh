// CallButton.js
import React from 'react';

const CallButton = ({ phoneNumber }) => {
  return (
    <a href={`tel:${phoneNumber}`} className="call-button">
      📞
    </a>
  );
};

export default CallButton;
