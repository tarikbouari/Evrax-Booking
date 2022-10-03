import React from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './trip.css';
import squad from '../images/squad.jpg';

const Trip = () => (
  <div className="py-5">
    <div className="trip-card d-flex justify-content-between py-3">
      <div className="left-card d-flex">
        <h3> Wild Trips</h3>
        <button type="button">Seee all</button>
      </div>
      <div className="right-card d-flex">
        <BsFillArrowLeftCircleFill className="arrow" />
        <BsFillArrowRightCircleFill className="arrow" />
      </div>
    </div>

    <div className="box ">
      <div className="Box-tripCard ">
        <div className="card">
          <div>
            <img src={squad} alt="bike-rides" className="img-card" />
          </div>
          <div className="info-card">
            <div className="d-flex">
              <h4>Quad Bike RIDES</h4>
              <span> Person 2</span>
            </div>
          </div>
        </div>
      </div>

      <div className="Box-tripCard ">
        <div className="card">
          <div>
            <img src={squad} alt="bike-rides" className="img-card" />
          </div>

          <div className="info-card">
            <div className="d-flex">
              <h4>Quad Bike RIDES</h4>
              <span> Person 2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Trip;
