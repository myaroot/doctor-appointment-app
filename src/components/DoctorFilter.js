import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Logout from '../containers/Logout';
import Style from '../styles/DoctorFilter.module.css';
// import Logout from './Logout';

const DoctorFilter = (props) => {
  const { handleFilter, handleLogout } = props;

  const handleClick = (event) => {
    const value = event.target.innerText;
    handleFilter(value);
  };

  return (
    <div className={Style.filterBox}>
      <div className={Style.buttonPosition}>
        <h3 className={Style.centerText}>Filter by Specialty</h3>
        <button type="button" className={Style.buttonText} onClick={handleClick}>All</button>
        <button type="button" className={Style.buttonText} onClick={handleClick}>Gynecologist</button>
        <button type="button" className={Style.buttonText} onClick={handleClick}>Neurologist</button>
        <button type="button" className={Style.buttonText} onClick={handleClick}>Paediatrician</button>
        <button type="button" className={Style.buttonText} onClick={handleClick}>Surgeon</button>
        <button type="button" className={Style.buttonText} onClick={handleClick}>Cardiologist</button>
        <Link to="/appointmentDisplay">Appointments</Link>
      </div>
      <div>
        <button type="button" onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
};

DoctorFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  // history: PropTypes.instanceOf(Object).isRequired,
  // handleList: PropTypes.func.isRequired,
};

export default DoctorFilter;
