import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {GAME_PATH, HOME_PATH} from "./utils/paths";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: HOME_PATH,
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {
    path: GAME_PATH,
    loadChildren: () => import('./components/game/game.module').then(m => m.GameModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
