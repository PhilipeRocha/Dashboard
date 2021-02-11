import React, { useState } from 'react'
import { Container, ToggleLabel, ToggleSelector } from './style'

interface IToggleProps {
    labelLeft: string
    labelRight: string
    checked: boolean
    onChange(): void
}

const Toggle: React.FC<IToggleProps> = ({
    labelLeft, labelRight, checked, onChange
}) => {
    const [online, setOnline] = useState(false)
    return (

        <Container>
            <ToggleLabel>{labelRight}</ToggleLabel>
            <ToggleSelector
                checked={checked}
                uncheckedIcon={false}
                checkedIcon={false}
                onChange={onChange}
            />
            <ToggleLabel>{labelLeft}</ToggleLabel>
        </Container>
    )
}
    

export default Toggle