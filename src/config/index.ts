
// handled now manually
import './ktoty/style.scss';
import { GraphicTheme } from 'consts/GraphicTheme';


export const initCustoms = () => {
}

// check by url for ktoty customization
const ktoty = /(ktoty\.?|-kt)/gi.test(window.location.href);

const lawoftime = !ktoty;
const darkTheme = lawoftime;
const defaultTheme = ktoty ? GraphicTheme.Tzolkine : GraphicTheme.Classic;

export const config = {
    lawoftime,
    ktoty,
    darkTheme,
    defaultTheme,
}

export default config;