import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
    cursor: pointer;
    &:hover{
      transform: scale(1.2);
      text-shadow: 5px 5px 5px rgba(0,0,0,.8);
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
    cursor: pointer;
`

const icones = [perfil, sacola]

function IconesHeader () {
    return (
        <Icones>
          {icones.map((icone) => (
            <Icone><img src={icone}></img></Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader
