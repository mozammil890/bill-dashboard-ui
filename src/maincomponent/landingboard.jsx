import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './landingboard.css';
import { useNavigate } from "react-router-dom";
import MaterialCard from "../materialcomponent/materialcard";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

const  LandingDashboard = () =>{

const navigate = useNavigate();

const handleClick = () => {
  navigate('/sales-submit');
}


const card = (
  <React.Fragment>
    <CardContent>
    </CardContent>
    <CardActions>
    </CardActions>
  </React.Fragment>
);

return(<> 
          <AppBar position="static" className="app_bar">
        <Toolbar>
          <Typography variant="h6" component="div"  className="app_bar_text">
            Dippy
          </Typography>
        </Toolbar>
      </AppBar>
    <Grid  spacing={1} padding={1}  className="main_grid">
    <Grid item xs={12} sm={6} md={6} lg={4} xl={12} className="child_grid" >
          <Card className="box_catlog" onClick={handleClick}>
            <CardContent>
              <div className="inside_card"><h2 className="app_bar_text">Enter Today's Sale</h2> </div>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} xl={12} className="child_grid">
          <Card className="box_catlog">
            <CardContent>
            <div className="inside_card"><h2 className="app_bar_text">Sale's  DashBoard</h2> </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={4} xl={12} className="child_grid">
          <Card className="box_catlog">
            <CardContent>
            <div className="inside_card"><h2 className="app_bar_text">To be Decided</h2> </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </>);

}

export default LandingDashboard;