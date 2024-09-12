import Home from '~/pages/Home';
import Followwing from '~/pages/Followwing';
import Upload from '~/pages/Upload';
import { HeaderOnlyLayout } from '~/components/Layout';


const publicRoutes = [
{ path: '/', component: Home},
{ path: '/following', component: Followwing},
{ path: '/upload', component: Upload , layout : HeaderOnlyLayout},
];

const privateRoutes = [

];
 export { privateRoutes, publicRoutes }