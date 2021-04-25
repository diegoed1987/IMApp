import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Register from '../Register/Register';
import { useHistory } from "react-router-dom";
import './Login.css';

const Login = () =>{

  const [vEmail, setEmail] = React.useState("");
  const [vPass, setPass] = React.useState("");
  const [vHelper, setHelper] = React.useState("");
  const [vError, setError] = React.useState(false);

  function handleSubmit(){
    console.log("Correo: "+ vEmail);
    console.log("Password: "+ vPass);
    
    if(vEmail === "diegoerazo.121@gmail.com" && vPass === "oceano121"){
      this.props.history.push('/register')
    }
  }

  const classes = useStyles();

  return (
    <Grid container component="main" className="root">
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className="image"/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className="paper">
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Inicio Sesión
          </Typography>
          <form className="form" action="/selector">
            <TextField variant="outlined" margin="normal" required fullWidth id="email"
              label="Correo Electrónico" name="email" autoComplete="email" autoFocus
              onChange={(e) =>{
                setEmail(e.target.value);
                let reg = new RegExp(/@/g).test(vEmail);
                if(!reg){
                  setError(true);
                  setHelper("Correo invalido");
                }else{
                  setError(false);
                  setHelper("");
                }
              }} error={vError} helperText={vHelper}/>
            <TextField variant="outlined" margin="normal" required fullWidth name="password"
              label="Contraseña" type="password" id="password" autoComplete="current-password"
              onChange={(e)=>{
                setPass(e.target.value);
              }}/>
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Iniciar Sesion
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/register" variant="body2">
                    {"¿No tienes una cuenta? Registrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default Login;

