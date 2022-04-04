import styled from 'styled-components'
import { useEffect, useState, useContext } from 'react'
import dayjs from 'dayjs';
import axios from 'axios';
import TokenContext from './../contexts/TokenContext'
import ActivateContext from './../contexts/ActivateContext'
import PercentageContext from './../contexts/PercentageContext'
import TodayHabit from './TodayHabit'

require('dayjs/locale/pt-br');

export default function HojePage() {
    const diaSemana = ['Domingo, ', 'Segunda, ', 'Terça, ', 'Quarta, ', 'Quinta, ', 'Sexta, ', 'Sabado, ']
    const weekday = diaSemana[dayjs().locale('pt-br').format('d')]
    const date = dayjs().locale('pt-br').format('DD/MM')
    const [todayHabits, setTodayHabits] = useState([-1])
    const { token, setToken } = useContext(TokenContext)
    const { active, setActive } = useContext(ActivateContext)
    const { percentage, setPercentage } = useContext(PercentageContext)
    const [reload,setReload] = useState([false])
    let habitosACarregar = (<></>)
    setActive(true)


    useEffect(() => {
        const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get(url, config)
        promise.then((response) => {
            let aux = [...response.data]
            let allHabits = aux.length
            let cont = 0

            for (let i = 0; i < allHabits; i++) {
                if (aux[i].done) {
                    cont++
                }
            }

            console.log(aux, allHabits, cont)
            console.log("cheguei aqui")
            setPercentage((cont / allHabits))
            habitosACarregar = percentageMarked()
            setTodayHabits([...response.data])
            
        })
    }, [reload]
    )

    function percentageMarked() {
        if (todayHabits[0] === -1) return <h2>Carregando seus Habitos</h2>
        if (todayHabits.lenght === 0) return <h2>Dia de folga! Sem hábitos para hoje!</h2>
        return (
            todayHabits.map((habit) => {
                const { id, name, done, currentSequence, highestSequence } = habit;
                return <TodayHabit
                    key={id}
                    id={id}
                    name={name}
                    currentSequence={currentSequence}
                    done={done}
                    highestSequence={highestSequence} 
                    callback={() => setReload([!reload])}/>
            })
        )
    }

    return (
        <HabitsToday>
            <div className="day">
                <h1>{weekday}{date}</h1>
                <h2 className={percentage === 0 ? '' : 'verde'} >{percentage === 0 ? "Nenhum hábito concluído ainda" : `${percentage*100}% dos habitos concluidos` }</h2>
            </div>
            {percentageMarked()}
            <div className="space"></div>
        </HabitsToday>
    )
}

const HabitsToday = styled.main`
    background-color: #E5E5E5;
    min-height: calc(100vh - 70px);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .day{
        margin-top: 98px;
        width: 340px;
    }

    h1{
        margin-left: 17px;
        font-family: Lexend Deca;
        font-size: 23px;
        color: #126BA5;
    }

    h2{
        margin-top: 5px;
        margin-left: 17px;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        color: #BABABA;
        margin-bottom: 28px;
    }

    .verde{
        color: #8FC549;
    }

    .space{
        margin-bottom: 100px;
    }
`