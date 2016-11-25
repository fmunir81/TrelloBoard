import { RouterModule,Routes } from '@angular/router';
import { IndexComponent }   from './Components/index.component';
import { DashBoardComponent }   from './Components/dashboard.component';
export const AppRoutes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'dashboard/:id/:name', component: DashBoardComponent }
];