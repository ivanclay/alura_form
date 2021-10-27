import React from 'react'
// import Button from '@material-ui/core/Button';
//import { TextField, Button, Switch  } from '@mui/material';
import { TextField, Button, Switch, FormControlLabel  } from '@material-ui/core';


function RegisterForm() {
    return ( 
        <form>
            <TextField id="name" label="Name" variant="outlined" fullWidth="true" margin="normal" /> 
            <TextField id="surname" label="Surname" variant="outlined" fullWidth="true" margin="normal" /> 
            <TextField id="document" label="Document" variant="outlined" fullWidth="true" margin="normal" /> 

            <FormControlLabel 
                label="Promotions"  
                control={<Switch name="promotions"  defaultChecked={true} />}
            />

            <FormControlLabel 
                label="News Letter"  
                control={<Switch name="news-letter" defaultChecked={true}  />}
            />

            
            
            
            <Button variant="contained" color="primary">Register</Button>
        </form>  
    );
}

export default RegisterForm;