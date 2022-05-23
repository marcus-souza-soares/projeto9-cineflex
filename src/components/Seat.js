import styled from 'styled-components';
import { useState } from 'react';

export default function Seat({ children, isAvailable, idlist, id, setIdlist, name}){

    let [selecionado, setSelecionado] = useState(false);

    function Clicar(){
        if(isAvailable === true){
            if (selecionado === false){
                setSelecionado(true);
                setIdlist([
                    ...idlist, {id, name}
                ]);
            } else {
                setSelecionado(false);
                setIdlist(idlist.filter(item => {
                                    if(item.id === id){
                                        return false;
                                    } else {
                                        return true;
                                    }
                                }))

            }    
            console.log(idlist)
        } else {
            alert('Esse assento não está disponível')
        }
    }

    return (
        <Assento selecionado={selecionado} isAvailable={isAvailable} onClick={Clicar}>
            {children}
        </Assento>
    )
}

const Assento = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props => {
        if (props.selecionado === true) {
            return '#8DD7CF';
        } else if (props.isAvailable === true) {
            return '#C3CFD9'
        } else {
            return '#FBE192'
        }
    }};
    border: ${props => {
        if (props.selecionado === true) {
            return '1px solid #1AAE9E';
        } else if (props.isAvailable === true) {
            return '1px solid #7B8B99'
        } else {
            return '1px solid #F7C52B'
        }
    }};
`
