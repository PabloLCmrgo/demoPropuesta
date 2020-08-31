import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Dashboard', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/catalogos', title: 'Catalogos', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '', title: 'Graficos', icon: 'ft-file', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path: '/graficos/ngx-charts', title: 'ngxCharts', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []}            
        ]
    },
    {
        path: '', title: 'Observables', icon: 'ft-file', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            {path: '/observables/send-message', title: 'Enviar Mensaje', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []}            
        ]
    },
    {
        path: '/tablas', title: 'Tablas', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }
];
