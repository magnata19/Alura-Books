import styled from 'styled-components'
import { Titulo } from '../Titulo'

const Card = styled.div`
    align-items: center;
    background-color: #D3D3D3;
    box-shadow: 0px 4px 4px rgba(0,0,0,.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
`

const Botao = styled.button`
    background-color: #eb9b00;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover{
        cursor: pointer;
        background-color: #CD853F;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color:#002f52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda ({titulo,subtitulo,descricao,img}) {
    return(
        <Card>
            <div>
            <Titulo 
            tamanhoFonte = "16px" 
            cor= "#000"
            background = "D3D3D3"
            >{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda