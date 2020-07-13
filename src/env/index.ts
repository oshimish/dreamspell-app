
// handled now manually
// import './ktoty/style.css';
import { GraphicTheme } from 'consts/GraphicTheme';


export const initCustoms = () => {
}

const lawoftime = true;
const ktoty = !lawoftime;
const darkTheme = lawoftime;
const defaultTheme = ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;

export const env = {
    lawoftime,
    ktoty,
    darkTheme,
    defaultTheme,
}

export default env;