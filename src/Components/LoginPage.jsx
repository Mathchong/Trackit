import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
// import Loader from 'react-loader-spinner';
import axios from 'axios';
import TokenContext from './../contexts/TokenContext'
import ImageContext from './../contexts/ImageContext'
import ActivateContext from './../contexts/ActivateContext'

import BigLogo from "./../Assests/BigLogo.svg"


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conectando, setConectando] = useState(false);
    const [mostrarNoBotao, setMostrarNoBotao] = useState("Entrar");
    const {token, setToken} = useContext(TokenContext);
    const {image, setImage } = useContext(ImageContext);
    const navigate = useNavigate();

    const {active, setActive} = useContext(ActivateContext)
    setActive(false)

    useEffect(() => {
        if (conectando) {
            setMostrarNoBotao("Carregando...")
        } else setMostrarNoBotao('Entrar')

    }, [conectando])

    function doLogin(event) {
        event.preventDefault();
        setConectando(true)

        const body = { email: email, password: password }
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body)

        promise.then((response) => {
            console.log(response)
            console.log(response.data)
            setConectando(false)
            setImage(response.data.image)
            setToken(response.data.token)
            navigate('/hoje')
        })

        promise.catch((error) => {
            console.log(error)
            setPassword('')
            setEmail('')
            setConectando(false)
            alert('Entre novamente com seu e-mail e senha')
        })

    }

    return (
        <LoginContainer>
            <img src={BigLogo} alt="Trackit Logo" />
            <form onSubmit={doLogin}>
                <input
                    required
                    type="text"
                    disabled={conectando}
                    placeholder=" email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    required
                    type="password"
                    disabled={conectando}
                    placeholder=" senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button disabled={conectando} type="submit">{mostrarNoBotao}</button>
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
    background-color: #EEE;

    

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
    }

    input{
        margin: 0 36px 6px 36px;
        height: 45px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
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
        opacity: ${props => props.disabled ? 0.2 : 1};
    }

    .toRegister{
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0em;
        text-align: center;
        color: #52B6FF;
    }
`