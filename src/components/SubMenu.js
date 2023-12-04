import React, { useState } from 'react';

const SubMenuPage = () => {
  const [submenu, setSubMenu] = useState(null);

  const handleSubMenuClick = (option) => {
    setSubMenu(option);
  };
  return (
    <div>
      <ul className="mail-agent-list">
        <li onClick={() => handleSubMenuClick('Overview')}>Overview</li>
        <li onClick={() => handleSubMenuClick('Setup Info')}>Setup Info</li>
        <li onClick={() => handleSubMenuClick('Domains')}>Domains</li>
        <li onClick={() => handleSubMenuClick('ProcessedEmails')}>
          ProcessedEmails
        </li>
        <li onClick={() => handleSubMenuClick('Templates')}>Templates</li>
        <li onClick={() => handleSubMenuClick('Webhooks')}>Webhooks</li>
        <li onClick={() => handleSubMenuClick('Email Tracking')}>
          Email Tracking
        </li>
        <li onClick={() => handleSubMenuClick('File Cache')}>File Cache</li>
      </ul>
      <hr></hr>
      <div>
        <h2>{submenu}</h2>
        {submenu === 'Templates' && (
          <div>
            <div className="img-box">
              <img
                className="image"
                src={process.env.PUBLIC_URL + '/assets/my-template-1.png'}
                alt="template"
              />
              <p>No templates yet, Add templates to view them here.</p>
              <button className="global-btn">Create Template</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SubMenuPage;
