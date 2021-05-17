import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'about', loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule) },
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'typography', loadChildren: () => import('./features/typography/typography.module').then(m => m.TypographyModule) },
  { path: 'forms', loadChildren: () => import('./features/forms/forms.module').then(m => m.FormsModule) },
  { path: 'icons', loadChildren: () => import('./features/icons/icons.module').then(m => m.IconsModule) },
  { path: 'cards', loadChildren: () => import('./features/cards/cards.module').then(m => m.CardsModule) },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
