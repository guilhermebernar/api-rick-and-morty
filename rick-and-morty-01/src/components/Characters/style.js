import styled from "styled-components";

export const CharList = styled.div`
    display: grid;
    grid-template-columns: 1 fr;
    margin: 0 1vh 0 1vh;
    padding: 1vh;
    
    @media (min-width: 480px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        flex-direction: none;
        
    }
    @media (min-width: 860px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        flex-direction: none;
    }
`
export const LoadingGif = styled.img`
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: center;
`
export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 26px;
    color: #085f82ff;
    font-family: 'Dosis';
    font-weight: 900;
`