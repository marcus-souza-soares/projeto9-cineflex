import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Screen from './components/Screen';
import Seat from './components/Seat'
import Footer from './components/Footer';
import Sucesso from './Sucesso'

export default function Seats() {
    const [session, setSession] = useState({})
    const { idSessao } = useParams();
    const [seats, setSeats] = useState([])
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('')
    const [idlist, setIdlist] = useState([]);
    const [sucesso, setSucesso] = useState(false);


    useEffect(() => {
        const req = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)

        req.then(reposta => {
            setSession({ ...reposta.data })

            setSeats([...Object.entries(reposta.data.seats)])
        })
    }, [])
    const movie = { ...session.movie };
    const day = { ...session.day }

    let seatsData = seats.map((item, index) => (
        {
            dados: item[1],
            id: index,
        }
    ));

    function Confirm(event) {
        event.preventDefault();
        let ids = idlist.map(item => item.id)
        let obj = {
            ids,
            name: name,
            cpf: cpf
        }
        const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj);
        promise.then(()=> console.log('enviado'));
        console.log(obj)
        setSucesso('true')
    }
    return (
        <>
            {!sucesso ?
                <>
                    <Screen>
                        <h1>Selecione o(os) assento(os)!</h1>
                    </Screen>
                    <Container>
                        {seatsData.map((seat, index) => (
                            <Seat
                                key={index}
                                selecionado={seat.selecionado}
                                isAvailable={seat.dados.isAvailable}
                                idlist={idlist}
                                setIdlist={setIdlist}
                                id={seat.dados.id}
                                name={seat.dados.name}
                            >
                                {seat.dados.name}
                            </Seat>))}
                    </Container>
                    <Legend>
                        <div className='selecionado'>
                            <div></div>
                            <h3>Selecionado</h3>
                        </div>
                        <div className='disponivel'>
                            <div></div>
                            <h3>Disponível</h3>
                        </div>
                        <div className='indisponivel'>
                            <div></div>
                            <h3>Indisponível</h3>
                        </div>
                    </Legend>
                    <Formulario>
                        <form onSubmit={Confirm}>
                            <div>
                                <label htmlFor="nome">Nome do comprador:</label>
                                <input type="text" placeholder='Digite o seu nome... ' id='nome' value={name} onChange={e => setName(e.target.value)} required />
                            </div>
                            <div>
                                <label htmlFor="cpf">CPF do comprador:</label>
                                <input type="number" placeholder='Digite o seu CPF... ' id='cpf' value={cpf} onChange={e => setCpf(e.target.value)} required />
                            </div>
                            <button type="submit">Reservar assento(os)</button>
                        </form>
                    </Formulario>
                    <Footer>
                        <span className='poster'><img src={movie.posterURL} alt="" /></span>
                        <span className='text'>
                            <h3>{movie.title}</h3>
                            <h3>{day.weekday} - {session.name}</h3>
                        </span>
                    </Footer>
                </>
                : <Sucesso 
                day={day}
                name={name}
                cpf={cpf}
                filme={movie.title}
                horario={session.name}
                seats={idlist}
                />}
        </>
    )
}
const Legend = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .selecionado div, .disponivel div, .indisponivel div{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: blue; 
    }
    .selecionado div{
        background-color: #8DD7CF;
        border: 1px solid #1AAE9E;
    }
    .disponivel div{
        background-color: #C3CFD9;
        border: 1px solid #7B8B99;
    }
    .indisponivel div {
        background-color: #FBE192;
        border: 1px solid #F7C52B;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

`

const Formulario = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div {
        display: flex;
        flex-direction: column;
    }
    input {
        width: 327px;
        height: 51px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 20px;
        ::placeholder{
            font-style: italic;
        }
    }

    button{
        width: 225px;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 5px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFFFFF;
    }
`
