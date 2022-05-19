import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';


export default function Sessions() {

    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([]);
    const { idFilme } = useParams();
    const [ chosenday, setChosenday ] = useState("");
    const [chosensession, setChosensession] = useState("");

    useEffect(() => {

        const req = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        req.then(resposta => {
            setMovie({ ...resposta.data });
            setDays([...resposta.data.days])

        });

        req.catch(() => alert('deu ruim'));


    }, []);

    console.log(movie.days);

    function Chosen(day, session){
        setChosenday(day);
        setChosensession(session);
        console.log(day)
        console.log(session)
    }

    return (
        <>
            <Screen>
                <h1>Selecione o horário! </h1>
            </Screen>
            {days.map(day => (
                <Horarios>
                    <Titulo>
                        <h3>{day.weekday} - {day.date}</h3>
                    </Titulo>
                    <Sessao>
                        {day.showtimes.map((sessao => (
                            <span onClick={() => (
                                Chosen(day.weekday, sessao.name)
                            )}>{sessao.name}</span>
                        )))}
                    </Sessao>
                </Horarios>
            ))}
        </>
    )
}

const Screen = styled.div`
    margin-top: 65px;
    height: 80px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Horarios = styled.div`
    width: 70%;
`
const Sessao = styled.div`
    display: flex;
    flex-direction: row;
    
    span{
        display: flex;
        width: 83px;
        height: 43px;
        color: #FFFFFF;
        background-color: #E8833A;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        margin: 20px 10px
    }
`
const Titulo = styled.div`
    margin-left: 10px
`