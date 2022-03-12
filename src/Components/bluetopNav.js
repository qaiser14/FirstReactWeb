import React from 'react'
import './bluetopNav.css';
import {FaGlobe} from 'react-icons/fa'
import {TiArrowSortedDown} from 'react-icons/ti'

class bluetopNav extends React.Component{
    render(){
        return(
            <div className="topNav">

                <div className="Globe">

                    <div>
                    <span id="icon1"><FaGlobe /></span>
                    <span id="icon2"><TiArrowSortedDown /></span>
                    </div>
                    <p className="hdg1">Available 24/7 at (018)900-6690</p>
                    
                </div>

    
                <div className="purchase1">
                    <p className="hdg2">First purchase offer: take 30% off shopwide.<span className="hdg3"> Code applied at checkout. Exclusion apply*</span> </p>
                </div>

            </div>
        )
    }
}

export default bluetopNav