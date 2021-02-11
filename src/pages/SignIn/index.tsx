import React, {useState} from "react"

import logoImg from '../../assets/logo.svg'

import Input from '../../components/input'
import Button from '../../components/button'

import {useAuth} from '../../hooks/auth'

import {
    Container,
    Logo,
    Form,
    FormTitle

} from './style'


const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setpassword] = useState<string>('')

    const { signIn } = useAuth()

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira"/>
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => signIn(email, password)}>
                <FormTitle>Entrar</FormTitle>

               <Input
               type='email'
               placeholder='E-mail'
               required
               onChange={(e) => setEmail(e.target.value)}
               />

               <Input 
               type='password'
               placeholder='Senha'
               required
               onChange={(e) => setpassword(e.target.value)}
               />


                <Button type="submit">
                    Acessar
                </Button>
            </Form>
        </Container>
    )
}

export default SignIn;