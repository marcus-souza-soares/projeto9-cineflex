import styled from 'styled-components';


export default function Header(){
    return (
        <Topo>
            <h1>CINEFLEX</h1>
        </Topo>
    )
}

const Topo = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    top: 0;
    left: 0;

    h1{
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        color: #E8833A;
    }
`