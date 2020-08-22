import { Routes, RouterModule } from '@angular/router';

//Route for content layout with sidebar, navbar and footer
export const Full_ROUTES: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('../../changelog/changelog.module').then(m => m.ChangeLogModule)
  },
  {
    path: 'catalogos',
    loadChildren: () => import('../../components/catalogos/catalogos.module').then(m => m.CatalogosModule)
  },
  {
    path: 'graficos',
    loadChildren: () => import('../../components/graficos/graficos.module').then(m => m.GraficosModule)
  },
  {
    path: 'tablas',
    loadChildren: () => import('../../components/tablas/tablas.module').then(m => m.TablasModule)
  },
  {
    path: 'full-layout',
    loadChildren: () => import('../../pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
  }
];
