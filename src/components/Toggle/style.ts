import styled from 'styled-components'
import Styled from "styled-components"
import Switch, {ReactSwitchProps} from 'react-switch'

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const ToggleLabel = styled.span`
    color: ${props => props.theme.colors.white}
`

//Manipulando as funções de um componente já pronto, no caso o Switch
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
    ({ theme }) => ({
        onColor: theme.colors.info,
        offColor: theme.colors.warning
    }))<ReactSwitchProps>`
    margin: 0 7px;
`