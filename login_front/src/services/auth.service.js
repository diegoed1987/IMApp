import axios from 'axios';

const API_URL = "http://localhost:8080/";

class AuthService{
    login(email, password){
        return axios
        .post(API_URL + "signin",{
            email,
            password
        })
        .then(response =>{
            if(response.data.accessToken){
                console.log(JSON.stringify(response.data));
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    register(nombre, apellido, email, password){

        return axios.post(API_URL + "signup",{
            nombre,
            apellido,
            email,
            password
        }).then(response =>{
            return response.data;
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();