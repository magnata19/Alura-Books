import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: transparent;
    padding-top: 20px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    background: grey;
    
`

const NovosLivros = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    padding: 15px 0;
    justify-content: center;
    cursor: pointer;
    background: grey;
   
    
`


function UltimosLancamentos () {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#eb9b00' 
            tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivros>
                {livros.map( livro => (
                <img src={livro.src}/>
                    ))}
            </NovosLivros>
            <CardRecomenda
            titulo={"Talvez você se interesse por..."}
            subtitulo={"Angular 11"}
            descricao={"Construindo uma aplicação com a plataforma Google."}
            img={imagemLivro}
            />
            <CardRecomenda
            titulo={"Talvez você se interesse por..."}
            subtitulo={"Angular 12"}
            descricao={"Veja as novas atualizações do Angular."}
            img={imagemLivro}
            />
        </UltimosLancamentosContainer>
        
    )
}

export default UltimosLancamentos