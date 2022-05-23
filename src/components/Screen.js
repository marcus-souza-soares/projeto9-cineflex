import styled from "styled-components"

export default function Screen({ children }){
    return(
        <Tela>
            { children }
        </Tela>
    )
}

const Tela = styled.div`
    margin-top: 65px;
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    
`