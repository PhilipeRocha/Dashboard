import React, { useMemo, useState } from "react"

import emojis from "../../utils/emojis"
import Toggle from "../Toggle"

import { useTheme } from '../../hooks/theme'

import { Container, Profile, Welcome, UserName } from "./style"

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme()

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false)

    const handleChangeTheme = () => {
        setDarkTheme(!darkTheme)
        toggleTheme()
    }

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        return emojis[indice]
    },[])
    return (
        <Container>
            <Toggle 
                labelLeft="Dark"
                labelRight="Light"
                checked={darkTheme}
                onChange={handleChangeTheme}
            />

            <Profile>
                <Welcome>Salve, {emoji}</Welcome>
                <UserName>Philipe Rocha</UserName>
            </Profile>
        </Container>
    )
}

export default MainHeader;