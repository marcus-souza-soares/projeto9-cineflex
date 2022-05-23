
import Screen from './components/Screen';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export default function Sucesso(props){
	console.log(props)
	return (
			<>
				<Screen>
                	<Finalizado><h1>Pedido feito com sucesso!</h1></Finalizado>
	            </Screen>
	            <Container>
	                <Informacoes>
	                	<h1>Filme e sessão</h1>
	                	<h2>{props.filme}</h2>
	                </Informacoes>
	    			<Informacoes>
	                	<h1>Ingressos</h1>
	                	{props.seats.map((banco, index) => <h2 key={index}>{`Assento ${banco.name}`}</h2>)}
	                </Informacoes>
	                <Informacoes>
	                	<h1>Comprador</h1>
	                	<h2>{`Nome: ${props.name}`}</h2>
	                	<h2>{`CPF: ${props.cpf}`}</h2>
	                </Informacoes>
	                <Link to='/'>
	                	<Voltar>
	                		<h1>Voltar para Home</h1>
	                	</Voltar>
	                </Link>
	            </Container>
			</>
            
		)
}
const Finalizado = styled.div`
	color: #247A6B;
	font-size: 24px;
	text-align: center;
`
const Container = styled.div`
	margin-left: 30px;
	
`
const Informacoes = styled.div`
	padding: 20px 0;

	h1{
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		color: #293845;
		margin-bottom: 10px;
	}
	h2{
		font-family: 'Roboto';
		font-style: normal;
		font-weight: 400;
		font-size: 22px;
		color: #293845;
	}
`
const Voltar = styled.div`
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
    margin: 0 auto;
    margin-top: 100px;
`