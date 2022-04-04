import styled from 'styled-components';
import check from './../Assests/check.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import TokenContext from './../contexts/TokenContext'

export default function TodayHabit(props) {
    const { id, name, done, currentSequence, highestSequence, callback } = props;
    const { token , setToken} = useContext(TokenContext)
    const navigate = useNavigate();
    let block = false

    function markHabit() {
        if(block) return;
        block = true;
        const checkUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const uncheckUrl = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
        const config = {
            headers:{
                Authorization: `Bearer ${token}`
            },
        };

        if(done){
            console.log("vou desmarcar")
            const promise = axios.post(uncheckUrl,null,config)
            promise.then((response) => {
                console.log(response.data)
                callback()
                navigate('/hoje')

            })

            promise.catch((error) => {
                console.log(error)
            })
        }else{
            console.log("vou marcar")
            const promise = axios.post(checkUrl,null,config)
            promise.then((response) => {
                console.log(response.data)
                console.log('deu certo')
                callback()
                navigate('/hoje')
            })
            promise.catch((error) => {
                console.log(error.message)
            })
        }
    }

    return (
        <TodayHabitCheck>
            <div>
                <h1>{name}</h1>
                <h3 className={done ? 'done' : ''}>Sequencia atual: <span>{currentSequence} dias</span></h3>
                <h3 className={done && (currentSequence === highestSequence) ? 'done' : ''}>Seu recorde: <span>{highestSequence} dias</span></h3>
                <button onClick={() => markHabit()} className={done ? 'done' : ""}>
                    <img src={check} alt="a check simbol" />
                </button>
            </div>
        </TodayHabitCheck>
    )
}

const TodayHabitCheck = styled.article`
    min-height: 94px;
    width: 340px;
    border-radius: 5px;
    background-color: #FFF;
    margin: 0px 0px 10px 18px;
    position: relative;

    h1{
        width: 208px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        margin: 10px 0px 2px 15px;
        color: #666666;
    }

    h3{
        font-family: Lexend Deca;
        font-size: 13px;
        font-weight: 400;
        color: #666;
        margin-left: 15px;
        margin-bottom: 3px;
    }

    h3:last-of-type{
        margin-bottom: 12px;
    }

    h3.done span{
        color: #8FC549;
    }

    button{
        height: 69px;
        width: 69px;
        border-radius: 5px;
        position: absolute;
        right: 13px;
        top: 13px;
        border: none
    }

    button.done{
        background-color: #8FC549;
    }
`