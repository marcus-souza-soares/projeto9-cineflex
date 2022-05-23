import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function Sessions() {
    const { idFilme } = useParams();

    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([]);   

    useEffect(() => {

        const req = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);

        req.then(resposta => {
            setMovie({ ...resposta.data });
            setDays([...resposta.data.days])

        });

        req.catch(() => alert('deu ruim'));


    }, []);

    console.log(movie.days);

    return (
        <>
            <Screen>
                <h1>Selecione o horário! </h1>
            </Screen>
            <Horarios >
                {days.map((day, index) => (
                    <>
                        <Titulo key={index}>
                            <h3>{day.weekday} - {day.date}</h3>
                        </Titulo>
                        <Sessao key={`0${index}`}>
                            {day.showtimes.map(((sessao, i) => (
                                <Link 
                                    style={{textDecoration: 'none'}} 
                                    to={`/assentos/${sessao.id}`}>

                                    <span key={`1${i}`}>
                                        {sessao.name}
                                    </span>
                                </Link>
                            )))}
                        </Sessao>
                    </>
                ))}
            </Horarios>
            <Footer>
                <span className='poster'><img src={movie.posterURL} alt="" /></span>
                <span className='text'><h3>{movie.title}</h3></span>
            </Footer>
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
    margin-bottom: 120px;
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
        margin: 10px 0px 10px 30px;
    }
`
const Titulo = styled.div`
    margin-left: 30px;
`