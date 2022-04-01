import styled from 'styled-components';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function footer() {
    const percentage = 66;
    return (
        <FooterTrack>
            <h1>Hábitos</h1>
            <div className="progressbar-container">
                <CircularProgressbar 
                value={percentage} 
                text={`${percentage}%`} 
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })}
                />
            </div>
            <h1>Histórico</h1>
        </FooterTrack>
    )
}

const FooterTrack = styled.footer`
    position: fixed;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #FFF;

    .progressbar-container{
        height: 91px;
        width: 91px;
        position: fixed;
        bottom: 10px;
    }

    h1{
        color: #52B6FF;
        font-family: Lexend Deca;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
    }

    h1:first-of-type{
        position: fixed;
        left: calc((50vw - 67.933px)/2)
    }

    h1:last-of-type{
        position: fixed;
        right: calc((50vw - 78.15px)/2)
    }
`