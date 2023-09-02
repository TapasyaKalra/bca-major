import React, { useState} from 'react';
import DatePicker from './DatePicker';
import { Button } from 'reactstrap';
function Pricing() {
    const [showDatePicker, setShowDatePicker] = useState(false);
    return(
        <div className="container">
            <div className = "row" >
                <span className="display-1 text-center">Pricing and Packages </span>
                
                <hr className = "mx-auto col-lg-6"/>
            </div>
            <div className="row mt-5 py-0 px-0">
                <div className="col-12 col-md card px-0 bg-primary text-light">
                    <div className="card-header border-secondary border-2">
                        <span className="display-6">Platinum Package</span>
                    </div>
                    <div className="card-body bg-transparent fw-light">
                        <h5 className="card-title">The best of the best.</h5>
                        <p className="card-text">This package includes 2-day pre-bridal pampering along with engagement look.</p>
                        <p className="card-text">Book now for 20,000/- only</p>
                        <p className="card-text">Includes :</p>
                        <ul className="list-group mb-3 fw-bold">
                            <li className="list-group-item">Pre-Bridal Work</li>
                            <li className="list-group-item">Bridal Makeup</li>
                            <li className="list-group-item">Engagement Makeup</li>
                        </ul>
                        
                    </div>
                    <div className="card-footer text-center border-0 pb-3">
                        
                        <Button onClick={()=>setShowDatePicker(!showDatePicker)} className="btn btn-secondary">Book Now!</Button>
                        
                    </div>
                </div>
                <div className="col-12 col-md card px-0 bg-primary text-light">
                    <div className="card-header bg-primary text-light border-secondary border-2">
                        <span className="display-6">Gold Package</span>
                    </div>
                    <div className="card-body fw-light bg-transparent">
                        <h5 className="card-title">Most popular package.</h5>
                        <p className="card-text">This package includes the bridal makeup along with engagement look.</p>
                        <p className="card-text">Book now for 18,000/- only</p>
                        <p className="card-text">Includes :</p>
                        <ul className="list-group mb-3 fw-bold" >
                            <li className="list-group-item">Bridal Makeup</li>
                            <li className="list-group-item">Engagement Makeup</li>
                        </ul>
                        
                    </div>
                    <div className="card-footer text-center border-0 pb-3">
                        
                        <Button onClick={()=>setShowDatePicker(!showDatePicker)} className="btn btn-secondary">Book Now!</Button>
                        
                    </div>
                </div>
                <div className="col-12 col-md card px-0 bg-primary text-light">
                    <div className="card-header bg-primary text-light border-secondary border-2">
                        <span className="display-6">Silver Package</span>
                    </div>
                    <div className="card-body fw-light bg-transparent">
                        <h5 className="card-title">The value king.</h5>
                        <p className="card-text">This package includes only the d-day look. Can be combined with ala-carte options.</p>
                        <p className="card-text">Book now for 15,000/- only</p>
                        <p className="card-text">Includes :</p>
                        <ul className="list-group mb-3 fw-bold">
                            <li className="list-group-item">Bridal Makeup</li>
                        </ul>
                        
                    </div>
                    <div className="card-footer text-center border-0 pb-3">
                        
                        <Button onClick={()=>setShowDatePicker(!showDatePicker)} className="btn btn-secondary">Book Now!</Button>
                        
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <p className="text-center text-muted fs-5">Note : Prices are subjected to change without prior notice.</p>
            </div>
            <div className="row">
                <div className="mb-5 col-6 offset-md-3">
                    {showDatePicker && <DatePicker/> }
                </div>
            
            </div>
        </div>
    );
}

export default Pricing;