
// handled now manually
import './ktoty/style.scss';
import { GraphicTheme } from 'consts/GraphicTheme';


export const initCustoms = () => {
}

const lawoftime = !process.env.REACT_APP_KTOTY;
const ktoty = !lawoftime;
const darkTheme = lawoftime;
const defaultTheme = ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;

export const config = {
    lawoftime,
    ktoty,
    darkTheme,
    defaultTheme,
}

export default config;