// Header.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../store/TabSlice';

const Header = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const handleFlightClick = () => {
    if (activeTab !== 'flight') {
      dispatch(setActiveTab('flight'));
    }
  };

  const handleHotelClick = () => {
    if (activeTab !== 'hotel') {
      dispatch(setActiveTab('hotel'));
    }
  };

  return (
    <div>
      <a href="#" onClick={handleFlightClick}>
        Flight
      </a>
      <a href="#" onClick={handleHotelClick}>
        Hotel
      </a>
    </div>
  );
};

export default Header;
