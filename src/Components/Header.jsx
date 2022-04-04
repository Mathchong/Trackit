import styled from 'styled-components';
import { useState, useContext, useEffect } from 'react';
import ImageContext from '../contexts/ImageContext';

export default function Header() {
    const { image, setImage } = useContext(ImageContext)

    useEffect(() => {}, [image])

    return (
        <HeaderTrack>
            <h1>TrackIt</h1>
            <img src={image} alt="" />
        </HeaderTrack>
    )
}

const HeaderTrack = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px 0px #00000026;
    z-index: 1;


    h1{
        margin-left: 18px;
        font-family: Playball;
        font-size: 39px;
        font-weight: 400;
        line-height: 49px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFF;
    }

    img{
        border-radius: 50%;
        height: 51px;
        width: 51px;
        margin-right: 18px;
    }
`