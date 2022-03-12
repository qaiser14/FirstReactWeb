import React from 'react'
import {Link} from 'react-router-dom'
const Services = () => {
    return (
        <div>
            hello from services 
            <ul>
             <Link  to="/services/123">

                <li>Service 1</li>
             </Link>
             <Link to="/services/456">
             
                <li>Service 2</li>
             </Link>

             <Link  to="/services/789">

            <li>Service 3</li>
            </Link>
            <Link to="/services/10">

            <li>Service 4</li>
                </Link>
            </ul>            
        </div>
    )
}

export default Services
