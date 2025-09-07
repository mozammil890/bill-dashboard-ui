import React from "react";
import AppBar from '@mui/material/AppBar';
import { Button, Box } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './landingboard.css';
import { useNavigate } from "react-router-dom";
import MaterialCard from "../materialcomponent/materialcard";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import image3 from '../images/logo3.png';
import Footer from "../footer/footer";

const  LandingDashboard = () =>{

const navigate = useNavigate();

const handleClick = () => {
  navigate('/sales-submit');
}

const handleClick2 = () => {
  navigate('/dash-board');
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
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
<Grid container  spacing={2} padding={6}
      justifyContent="center" className="main_grid">
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}  marginTop={2}>
  <div>
  <Card  onClick={handleClick}>
            <CardContent>
              <div className="inside_card"><h2 className="app_bar_text">Enter Today's Sale</h2> </div>
            </CardContent>
          </Card>
  </div>
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={6} xl={6} marginTop={2} >
  <div>
  <Card onClick={handleClick2} >
            <CardContent>
            <div className="inside_card"><h2 className="app_bar_text">Sale's  DashBoard</h2> </div>
            </CardContent>
          </Card>
  </div>
  </Grid>
</Grid>
<Grid container justifyContent="center">
  <Grid  item xs={12} sm={12} md={12} lg={12} xl={12} >
    <Card >
            <CardContent>
            <div className="inside_card_1" >
            <img src={image3} alt="Logo" className="logo_img" />
            </div>
            </CardContent>
          </Card>
  </Grid>
</Grid>
<br/>
<Footer/>
      </>);

}

export default LandingDashboard;