import axios from 'axios';
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function RenderMovies() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const req = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies')
        req.then(resposta => {
            setMovies(resposta.data)
            console.log(resposta.data)
        })
    }, [])

    return (
        <>
            <Movies>
                <Screen>
                    <h1>Selecione o filme! </h1>
                </Screen>
                {movies.map(filme => (
                    <Link to={`/sessoes/${filme.id}`} key={filme.id}>
                        <Movie>
                            <img src={filme.posterURL} alt={`${filme.id}`} />
                        </Movie>
                    </Link>
                ))}
            </Movies>
        </>)
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
const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
        width: 130px;
        height: 193px;
    }
`
const Movie = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 5px;
    margin: 10px;
`