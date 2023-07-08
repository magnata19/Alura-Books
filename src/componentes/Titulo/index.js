import styled from 'styled-components'

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.background};
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
    text-shadow: 2px 2px 2px rgba(0,0,0,.7);
   
`