import styled from "styled-components";
import axios from "axios";

export default function HabitosPage(){
    return(
        <Habitos>
            <div className="meusHabitos">
                <h1>Meus hábitos</h1>
                <button>+</button>
            </div>
        </Habitos>
    )
}

const Habitos = styled.main`

    .meusHabitos{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 70px;
        height: 85px;

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