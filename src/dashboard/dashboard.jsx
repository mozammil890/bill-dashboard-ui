import React from "react";
import AppBar from '@mui/material/AppBar';
import { Button, Box } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Footer from "../footer/footer";

function DashBoard(){
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
    <div>
        <h1>This is the sales dashboard page!!!</h1>
    </div>
    <br/>
    <Footer/>
    </>);
}

export default DashBoard;