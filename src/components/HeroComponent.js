import React, { useState } from 'react';
import SubMenuPage from './SubMenu';
import AddEmail from './AddEmail';
import '../style/HeroStyle.css';

import {
  FaAngleRight,
  FaCalendarTimes,
  FaChartBar,
  FaCircleNotch,
  FaCog,
  FaCommentAlt,
  FaCompactDisc,
  FaGgCircle,
  FaHeadphones,
  FaInfoCircle,
  FaList,
  FaListAlt,
  FaMailBulk,
  FaMale,
  FaPlug,
  FaPlus,
  FaQuestion,
  FaRegStickyNote,
  FaUser,
  FaVolumeUp,
} from 'react-icons/fa';

function HeroComponent() {
  const [menu, setMenu] = useState(null);

  const handleClick = (option) => {
    setMenu(option);
  };
  return (
    <div className="grid-container">
      <div className="left-box">
        <h2>
          <FaMailBulk className="space" />
          TechnixMail
        </h2>
        <hr></hr>
        <ul>
          <li
            className={menu === 'Dashboard' ? 'active' : ''}
            onClick={() => handleClick('Dashboard')}
          >
            <FaListAlt className="space" /> Dashboard
          </li>
          <div className="plus">
            <li
              className={menu === 'Mail Agents' ? 'active' : ''}
              onClick={() => handleClick('Mail Agents')}
            >
              <FaMale className="space" /> Mail Agents
            </li>
            <FaPlus className="space" />
          </div>
          <li
            className={`mail-agent ${menu === 'mail_agents_1' ? 'active' : ''}`}
            onClick={() => handleClick('mail_agents_1')}
          >
            mail_agent_1
          </li>
          <li
            className={menu === 'Domains' ? 'active' : ''}
            onClick={() => handleClick('Domains')}
          >
            <FaGgCircle className="space" /> Domains
          </li>
          <li
            className={menu === 'Reports' ? 'active' : ''}
            onClick={() => handleClick('Reports')}
          >
            <FaChartBar className="space" />
            Reports
          </li>
          <li
            className={menu === 'Subscription' ? 'active' : ''}
            onClick={() => handleClick('Subscription')}
          >
            <FaCompactDisc className="space" />
            Subscription
          </li>
          <li
            className={menu === 'Suppression List' ? 'active' : ''}
            onClick={() => handleClick('Suppression List')}
          >
            <FaCalendarTimes className="space" />
            Suppression List
          </li>
        </ul>
        <div className="setting">
          <hr></hr>

          <li
            className={`left-padding ${menu === 'Settings' ? 'active' : ''}`}
            onClick={() => handleClick('Settings')}
          >
            <FaCog className="space" />
            Settings
          </li>
        </div>
      </div>
      <div className="hero">
        {menu && (
          <div>
            <h2>{menu}</h2>

            {menu === 'Dashboard' && (
              <div className="inner-grid">
                <div className="innerbox">
                  <div className="flex">
                    <h3>Email Count</h3>
                    <button>Today</button>
                  </div>
                  <div className="grid">
                    <div className="count ">
                      <p className="small-box">
                        <FaAngleRight />
                      </p>
                      <p>
                        sent <br /> 0
                      </p>
                    </div>

                    <div className="count ">
                      <p className="small-box">
                        <FaCircleNotch />
                      </p>
                      <p>
                        Soft bounces <br /> 0
                      </p>
                    </div>
                    <div className="count ">
                      <p className="small-box">
                        <FaHeadphones />
                      </p>
                      <p>
                        Hard bounces <br /> 0
                      </p>
                    </div>
                    <div className="count ">
                      <p className="small-box ">
                        <FaInfoCircle />
                      </p>
                      <p>
                        Process failed <br /> 0
                      </p>
                    </div>
                  </div>
                </div>
                <div className="innerbox">
                  <div className="flex">
                    <h3>Credit Information</h3>
                    <h4>view more details</h4>
                  </div>
                  <p>Your account is yet to be reviewed.</p>
                </div>
                <div className="innerbox">
                  <h3>How can we help you?</h3>
                </div>
                <div className="innerbox">
                  <h3>Setup Option</h3>
                </div>
              </div>
            )}
            {menu === 'mail_agents_1' && (
              <div>
                <SubMenuPage handleClick={handleClick} />
              </div>
            )}

            {menu === 'Suppression List' && (
              <div>
                <AddEmail />
              </div>
            )}
          </div>
        )}
      </div>
      <div className="right-box">
        <li>
          <FaList />
        </li>
        <li>
          <FaUser />
        </li>
        <li>
          <FaRegStickyNote />
        </li>
        <li>
          <FaVolumeUp />
        </li>
        <li>
          <FaPlug />
        </li>
        <div className="right-footer">
          <li>
            <FaCommentAlt />
          </li>
          <li>
            <FaQuestion />
          </li>
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
