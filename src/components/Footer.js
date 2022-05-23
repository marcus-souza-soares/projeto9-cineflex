import styled from 'styled-components';

export default function Footer({ children }) {
    return (
        <Content>
            {children}
        </Content>
    )
}

const Content = styled.div`
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;

    .poster{

        height: fit-content;
        padding: 5px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        margin: 0 10px;
    }
    .poster img {
        width: 48px;
        height: 72px;
    }
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    display: flex;
`