import {
  faBed,
  faCalendarDays,
  faCar,
  faCircleMinus,
  faCirclePlus,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

import './header.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const navigate = useNavigate();

  const handleSearch = function () {
    navigate('/hotels', { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === 'list' ? 'headerContainer listmode' : 'headerContainer'
        }
      >
        <div className="headerList">
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className="headerTitle">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="btn-3" onClick={handleSearch}>
              <span>More Information !</span>
            </button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going ?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult . ${options.children} children. ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div>
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'd')}
                        >
                          <FontAwesomeIcon icon={faCircleMinus} />
                        </button>
                        &nbsp;&nbsp;
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        &nbsp;&nbsp;
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('adult', 'i')}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div>
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption('children', 'd')}
                        >
                          <FontAwesomeIcon icon={faCircleMinus} />
                        </button>
                        &nbsp;&nbsp;
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        &nbsp;&nbsp;
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('children', 'i')}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div>
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption('room', 'd')}
                        >
                          <FontAwesomeIcon icon={faCircleMinus} />
                        </button>
                        &nbsp;&nbsp;
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        &nbsp;&nbsp;
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption('room', 'i')}
                        >
                          <FontAwesomeIcon icon={faCirclePlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
