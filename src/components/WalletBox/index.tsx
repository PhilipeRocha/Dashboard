import React, {useMemo} from "react"
import Count from "react-countup"

import { Container } from "./style"

import dolarImg from '../../assets/dollar.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'

interface IWalletBoxProps {
    title: string
    amount: number
    footerlabel: string
    icon: 'dolar' | 'arrowUp' | 'arrowDown'
    color: string
}

const WalletBox: React.FC<IWalletBoxProps> = ({
    title, 
    amount,
    footerlabel,
    icon,
    color
}) => {

    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dolar':
                return dolarImg
            case 'arrowUp':
                return arrowUpImg
            case 'arrowDown':
                return arrowDownImg
            default: 
                return undefined
        }
    },[icon])
    return (
        <Container color={color}>
            <span>{title}</span>
            <h1>
                <strong>R$ </strong> 
                <Count 
                    end={amount}
                    separator="."
                    decimal=","
                    decimals={2}
                />
            </h1>
            <small>{footerlabel}</small>
            <img src={iconSelected} alt={title}/>
        </Container>
    )
}

export default WalletBox;