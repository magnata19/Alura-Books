import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
    text-shadow: 2px 2px 2px rgba(0,0,0,.3);

    &:hover{
        transform:scale(1.05);
        text-shadow: 2px 5px 5px rgba(0,0,0,.8);
    }
`

const Opcoes = styled.ul`
    display: flex; 
`

const textoOpcoes = ['CATEGORIAS','FAVORITOS','MINHA ESTANTE']


function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
        </Opcoes>
    )
} 

export default OpcoesHeader