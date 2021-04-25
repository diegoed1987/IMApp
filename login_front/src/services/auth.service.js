import axios from 'axios';


const API_URL = "http://localhost:8080/";

class AuthService{
    login(username, password){
        return axios
        .post(API_URL + "signin",{
            username,
            password
        })
        .then(response =>{
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    register(nombre, apellido, email, password){

        console.log("Entro a auth.service.js");
        console.log("Nombre: "+ nombre);
        console.log("Apellido: "+ apellido);
        console.log("Correo: "+ email);
        console.log("Password: "+ password);

        return axios.post(API_URL + "signup",{
            nombre,
            apellido,
            email,
            password
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();