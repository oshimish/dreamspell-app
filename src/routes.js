import KinPage from 'Pages/KinPage/KinPage';
import SignPage from 'Pages/SignPage/SignPage';
import TonePage from 'Pages/TonePage/TonePage';
import PlasmaPage from 'Pages/PlasmaPage/PlasmaPage';
import OraclePage from 'Pages/OraclePage/OraclePage';
import MoonPage from 'Pages/MoonPage/MoonPage';
import ZolkinPage from 'Pages/ZolkinPage/ZolkinPage';
import WaveSpellPage from 'Pages/WaveSpellPage/WaveSpellPage';
import YearPage from 'Pages/YearPage/YearPage';
import JourneyPage from 'Pages/JourneyPage/JourneyPage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: KinPage
    },
    {
        path: '/tone',
        component: TonePage
    },
    {
        path: '/sign',
        component: SignPage
    },
    {
        path: '/plasma',
        component: PlasmaPage
    },
    {
        path: '/oracle',
        component: OraclePage
    },
    {
        path: '/zolkin',
        component: ZolkinPage
    },
    {
        path: '/moon',
        component: MoonPage
    },
    {
        path: '/wavespell',
        component: WaveSpellPage
    },
    {
        path: '/journey',
        component: JourneyPage
    },
    {
        path: '/year',
        component: YearPage
    }
]

export default routes;