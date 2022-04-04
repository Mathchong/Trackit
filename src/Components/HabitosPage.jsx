import styled from "styled-components";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import TokenContext from './../contexts/TokenContext'
import HabitCreator from './HabitCreator'
import HabitStats from "./HabitStats";

export default function HabitosPage() {
    const { token, setToken } = useContext(TokenContext);
    const [creating, setCreating] = useState(false)
    const [name, setName] = useState('')
    const [days, setDays] = useState(new Map())
    const [reload, setReload] = useState(true)
    const [disabled, setDisabled] = useState(false)
    const [habitList, setHabitList] = useState([-1])
    const [reload2, setReload2] = useState([false])

    let habits = ''

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config)

        promise.then((response) => {
            console.log(response)
            console.log(response.data)
            setHabitList([...response.data])
            console.log(habitList)
            setReload(!reload)
            
        }
        )
    }, [reload2])

    // useEffect(() => { }, [reload])

    useEffect(()=>{
        habits = habitLoader()
        console.log(habits)
    },[habitList])

    function createHabit(){
        setDisabled(true)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const body = {
            name: name,
            days: [...days.keys()]
        }
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits',body,config)

        promise.then((response) => {
            console.log(response)
            console.log(response.data)
            alert('habito criado com sucesso')
            setDisabled(false)
            setDays(new Map())
            setName("")
            setCreating(false)
            setReload2([!reload2])
        })
        promise.catch((error)=>{
            console.log(error)
            console.log(error.data)
            alert('putz, deu xabu')
        })
    }

    function habitLoader(){
        console.log(habitList)
        if (habitList.lenght === 0) return <div className="nada">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</div>
        if (habitList[0] === -1) return <></>
        return habitList.map((habit) =>{
            return <HabitStats key={habit.id} callback={()=> setReload2([!reload2])} name={habit.name} days={habit.days} id={habit.id} />
        } )
    }

    return (
        <Habitos>
            <div className="meusHabitos">
                <h1>Meus hábitos</h1>
                <button onClick={() => setCreating(true)}>+</button>
            </div>

            {creating ? <CreatorBox>
                <input
                    disabled={disabled}
                    type="text"
                    placeholder=" nome do hábito"
                    value={name} onChange={(e) => setName(e.target.value)}>
                </input>
                <div className='weekdayContainer'>
                    <button
                        disabled={disabled}
                        className={days.has(0) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(0) ? days.delete(0) : days.set(0, 'Domingo') }
                            setReload([!reload])
                        }}>D
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(1) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(1) ? days.delete(1) : days.set(1, 'Segunda') }
                            setReload([!reload])
                        }}>S
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(2) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(2) ? days.delete(2) : days.set(2, 'Terça') }
                            setReload([!reload])
                        }}>T
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(3) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(3) ? days.delete(3) : days.set(3, 'Quarta') }
                            setReload([!reload])
                        }}>Q
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(4) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(4) ? days.delete(4) : days.set(4, 'Quinta') }
                            setReload([!reload])
                        }}>Q
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(5) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(5) ? days.delete(5) : days.set(5, 'Sexta') }
                            setReload([!reload])
                        }}>S
                    </button>
                    <button
                        disabled={disabled}
                        className={days.has(6) ? 'selecionado' : ''}
                        onClick={() => {
                            { days.has(6) ? days.delete(6) : days.set(6, 'Sabado') }
                            setReload([!reload])
                        }}>S
                    </button>
                </div>
                <div className="buttons">
                    <button disabled={disabled} onClick={() => setCreating(false)} className="cancel">Cancelar</button>
                    <button disabled={disabled} onClick={() => createHabit()} className="save">Salvar</button>
                </div>
            </CreatorBox> : <></>}
            {habitLoader()}
        </Habitos>
    )
}

const Habitos = styled.main`

    background-color: #E5E5E5;
    min-height: calc(100vh - 70px);
    display: flex;
    flex-direction: column;
    align-items: center;

    .meusHabitos{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 70px;
        height: 85px;
        width: 375px;
    }

    .meusHabitos h1{
        font-family: Lexend Deca;
        font-size: 23px;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0em;
        text-align: left;
        color: #126BA5;
        margin-left: 17px;
    }

    .meusHabitos button{
        height: 35px;
        width: 40px;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;
        color: #FFF;
        margin-right: 18px;
        font-size: 27px;
        text-align: center;
    }


`
const CreatorBox = styled.article`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 10px;

    input{
        width: calc(100% - 36px);
        height: 45px;
        margin: 18px 18px 8px 18px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 18px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color: #666666;
    }

    input::placeholder{
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: left;
    }

    .weekdayContainer{
        margin-left: 19px;
    }

    .weekdayContainer button{
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin: 0px 4px 29px 0px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color: #DBDBDB;
        background-color: #fff;
    }

    .weekdayContainer .selecionado{
        color: #FFF;
        background-color: #DBDBDB;
    }



    .buttons{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .save{
        height: 35px;
        width: 84px;
        border-radius: 5px;
        border: none;
        background-color: #52B6FF;
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
        margin: 0px 16px 0px 10px
    }

    .cancel{
        height: 35px;
        width: 84px;
        border-radius: 5px;
        border: none;
        background-color: #FFFFFF;
        font-family: Lexend Deca;
        font-size: 16px;
        font-weight: 400;
        color: #52B6FF;
    }
`