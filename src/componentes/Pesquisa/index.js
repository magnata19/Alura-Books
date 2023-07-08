import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'
 
const PesquisaContainer = styled.section`
    color: #fff;
    text-align: center;
    padding: 25px 0 0 0;
`
const Titulo = styled.h2`
    color: #fff;
    font-size: 26px;
    text-align: center;
    width: 100%;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
`
const Subtitulo = styled.h3`
    font-size: 20px;
    font-weight: 500;
    color: #ccc;
    text-shadow: 2px 2px 2px rgba(0,0,0,.5);
    margin-bottom: 40px;
`
const Resultado = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:center;
    

    p{
        width: 200px;
    }

    img{
        width: 100px;
        margin-top: 15px;
    }

    &:hover{
        border: 1px solid rgba(0,0,0,.5);
        box-shadow: 2px 2px 2px rgba(0,0,0,.5);
        cursor: pointer;
        transform: scale(1.05);
        
    }
`

function Pesquisa () {

    const [livrosPesquisados, setLivrosPesquisados] = useState([])


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
            placeholder="Escreva sua próxima leitura."
            onKeyPress={evento => {
                const textoDigitado = evento.target.value
                const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            {livrosPesquisados.map(livro => (
                    <Resultado>
                        <img src={livro.src}/>
                        <p>{livro.nome}</p>
                    </Resultado>
            ) ) } 
        </PesquisaContainer>
    )
}

export default Pesquisa