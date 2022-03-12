import React from 'react'
import BluetopNav from './Components/bluetopNav'
import EllawhiteBar from './Components/ellawhiteBar'
import DropDown from './Components/dropDown'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Services from './Components/Services'
import Service from './Components/Service'

class App extends React.Component{

    render(){   
        return(
            <div>
            
                
                         
            <Router>
                
                <Route path="/bluetopNav" component={BluetopNav} />
                <Route path="/ellawhiteBar" component={EllawhiteBar} />
                <Route path="/dropDown"  component={DropDown} />
                <Route path="/services" component={Services} />
                <Route path="/services/:id" component={Service} />
                
            </Router> 
            </div>
        )
    }
}

export default App