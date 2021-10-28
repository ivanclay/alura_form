import React from 'react';
import './App.css';
import RegisterForm from './components/register-form/register-form';
import { Container, Typography  } from '@material-ui/core';
import 'fontsource-roboto';

function App() {

  const onSubmitForm = (data) => {
    console.log(data);
  }

  return (
    <Container component="article" maxWidth="sm">
       <Typography variant="h3" component="h1" align="center">Register Form</Typography>
       <RegisterForm onSubmit={onSubmitForm}/>
    </Container>
  );
}

export default App;
