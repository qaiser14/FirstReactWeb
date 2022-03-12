import React from 'react'
import './ellawhiteBar.css'
import logo  from '../ellaImages/logo.png'



class ellawhiteBar extends React.Component{
    render(){
        return(

           <div className="white1">

                <div className="ellaIcon">
                    <img src={logo} />
                </div>

                <div className="brownBox">
                    <p className="hdg1ella">BUY ELLA</p>
                    <p className="hdg2ella">FROM $89</p>
                </div>

                <div className="login1">
                    <p className="hdg3ella">Login</p>
                </div>

           </div>
        )
    }
}

export default ellawhiteBar