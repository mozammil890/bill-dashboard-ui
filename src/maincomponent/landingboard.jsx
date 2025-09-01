import React from "react";
import { AppBar } from '@mui/material';
import './landingboard.css';

function LandingDashboard(){

return(<> 
        <AppBar/>
        <div className="app_bar"><h1 className="text_app">Dippy</h1></div>
        <div>
            <div className="box_catlog">Enter today sale</div>
            <div className="box_catlog">Admin dashboard</div>
            <div className="box_catlog">Under progress</div>
        </div>
      </>);

}

export default LandingDashboard;