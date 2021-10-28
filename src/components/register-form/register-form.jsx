import React, { useState } from 'react'
import { TextField, Button, Switch, FormControlLabel  } from '@material-ui/core';


function RegisterForm() {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [document, setDocument] = useState("");
    const [promotions, setPromotions] = useState(false);
    const [newsletter, setLewsletter] = useState(false);

    return ( 
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(name);
        }}>
            <TextField 
                value={name}
                onChange={(event) => {setName(event.target.value)}}
                id="name" 
                label="Name" 
                variant="outlined" 
                fullWidth="true" 
                margin="normal" 
            /> 
            <TextField 
                 value={surname}
                 onChange={(event) => {setSurname(event.target.value)}}
                id="surname" 
                label="Surname" 
                variant="outlined" 
                fullWidth="true" 
                margin="normal" 
            /> 
            <TextField 
                value={document}
                onChange={(event) => {setDocument(event.target.value)}}
                id="document" 
                label="Document" 
                variant="outlined" 
                fullWidth="true" 
                margin="normal" 
            /> 

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