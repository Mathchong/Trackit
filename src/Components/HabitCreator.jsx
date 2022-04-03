import styled from 'styled-components';

export default function HabitCreator(props){

    return (
        <CreatorBox>
        <input type="text" placeholder=" nome do hábito"></input>
        <div className='weekdayContainer'>
            <button className="weekday">D</button>
            <button className="weekday">S</button>
            <button className="weekday">T</button>
            <button className="weekday">Q</button>
            <button className="weekday">Q</button>
            <button className="weekday">S</button>
            <button className="weekday">S</button>
        </div>
        <div className="buttons">
            <button className="cancel">Cancelar</button>
            <button className="save">Salvar</button>
        </div>
        </CreatorBox>
    )
}

const CreatorBox = styled.article`
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    border-radius: 5px;

    input{
        width: calc(100% - 36px);
        height: 45px;
        margin: 18px 18px 8px 18px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 18px;
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

    .weekday{
        height: 30px;
        width: 30px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        margin: 0px 4px 29px 0px;
        font-family: Lexend Deca;
        font-size: 20px;
        font-weight: 400;
        color:#DBDBDB;
        background-color: #fff;
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