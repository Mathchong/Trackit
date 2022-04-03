import styled from 'styled-components';
import check from './../Assests/check.svg'

export default function TodayHabit(props) {
    const {id, name, done, currentSequence, highestSequence} = props;
    return (
        <TodayHabitCheck>
            <div>
                <h1>{name}</h1>
                <h3>Sequencia atual: {currentSequence} dias</h3>
                <h3>Seu recorde: {highestSequence} dias</h3>
                <button>
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

    button{
        height: 69px;
        width: 69px;
        border-radius: 5px;
        position: absolute;
        right: 13px;
        top: 13px;
        border: none
    }
`