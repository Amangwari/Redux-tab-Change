// Search.js
import React from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const activeTab = useSelector((state) => state.tab.activeTab);

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'flight' ? 'active' : ''}`}
            id="pills-flight-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-flight"
            type="button"
            role="tab"
            aria-controls="pills-flight"
            aria-selected={activeTab === 'flight'}
          >
            flight
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${activeTab === 'hotel' ? 'active' : ''}`}
            id="pills-hotel-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-hotel"
            type="button"
            role="tab"
            aria-controls="pills-hotel"
            aria-selected={activeTab === 'hotel'}
          >
            hotel
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className={`tab-pane fade ${activeTab === 'flight' ? 'show active' : 'fade'}`} id="pills-flight" role="tabpanel" aria-labelledby="pills-flight-tab" tabIndex="0">
          Content for flight tab
        </div>
        <div className={`tab-pane fade ${activeTab === 'hotel' ? 'show active' : 'fade'}`} id="pills-hotel" role="tabpanel" aria-labelledby="pills-hotel-tab" tabIndex="0">
          Content for hotel tab
        </div>
      </div>
    </div>
  );
};

export default Search;
