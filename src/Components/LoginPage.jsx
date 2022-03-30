import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import BigLogo from "./../Assests/BigLogo.svg"


export default function LoginPage(){
    const [loginInfo, setLoginInfo] = useState({email: '', password: ''})

    function doLogin(){
        console.log(loginInfo)
    }

    return(
        <LoginContainer>
            <img src={BigLogo} alt="Trackit Logo" />
            <form onSubmit={() => doLogin}>
                <input 
                type="text" 
                placeholder=" email" 
                onChange={(e) => setLoginInfo(loginInfo.email = e.target.value)}
                value={loginInfo.email}
                />
                <input 
                type="password" 
                placeholder=" password" 
                onChange={(e) => setLoginInfo(loginInfo.password = e.target.value)}
                value={loginInfo.password}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link className="toRegister" to="/cadastro" >Não tem uma conta? Cadastre-se!</Link>
        </LoginContainer>
    )
}


const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Lexend Deca;
    font-style: normal;
    font-weight: 400;

    

    img{
        margin-top: 66px;
        margin-bottom: 33px;
        width: 180px;
        height: 173px;
    }

    form{
        width: 100vw;
        max-width: 600px;
        display: flex;
        flex-direction: column;
        background-color: white;
    }

    input{
        margin: 0 36px 6px 36px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
    }

    input::placeholder{
        font-size: 20px;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
        color: #888;
    }

    button{
        margin: 0 36px 25px 36px;
        background-color: #52B6FF;
        border-radius: 4.64px;
        color: #FFF;
        height: 45px;
        border: none;
        font-size: 21px;
    }

    .toRegister{
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: #52B6FF;
    }
`