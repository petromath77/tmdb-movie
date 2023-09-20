export interface ThemeProps {
    background: string,
    color: string,
    navHover: string,
    headerColor: string
}

export const lightTheme: ThemeProps = {
    background: '#b9b9b9',
    color: '#1d1f28',
    headerColor: '#757583',
    navHover: '#cdcdcd'
}

export const blackTheme: ThemeProps = {
    background: '#4f4f50',
    color: '#fafafa',
    headerColor: '#383849',
    navHover: '#8d8d8d'
}