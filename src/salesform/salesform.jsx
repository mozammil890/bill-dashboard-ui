import React, { useEffect, useState } from "react";
import { submitApiFormData } from "../apis/saleFormApi";
import AppBar from '@mui/material/AppBar';
import { Button, Box } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Footer from "../footer/footer";
import Typography from '@mui/material/Typography';
import './salesform.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import image3 from '../images/logo3.png';



const SalesForm = () => {

    const [formData , submitFormData] = useState(
        {
            amount:'',
            day:'',
            date:''
        }
    );


    const handleChange = (e) => {
        const {name , value} = e.target;
        submitFormData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ));

    }

    const handleSubmit = async  (e) => {
        e.preventDefault();
        try{
            const response = await submitApiFormData(formData);
            alert('Form submitted successfully!');
        }catch(error){
            console.log('server response ', error);
        }
        console.log(formData , "This is the formData");
    }
    return(
    <>
         <AppBar position="static" className="app_bar">
        <Toolbar>
          <Typography variant="h6" component="div"  className="app_bar_text">
            Dippy
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit" variant="outlined">Login</Button>
        </Toolbar>
      </AppBar>
      <Grid container className="main_grid_form" justifyContent={"center"} >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div className="form_box">

        </div>
        </Grid>
      </Grid>
        {/* <div className="sales_form">
            <form  onSubmit={handleSubmit}>
            <div>
                <label>Enter Amout</label>
                <input type = "text" name="amount" value={formData.amount} onChange={handleChange} required/>
            </div>
            <div>
                <label>Enter Day</label>
                <input type = "text" name="day" value={formData.day} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
            </form>
        </div> */}
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
        <Footer/>
    </>
    );
}

export default SalesForm;