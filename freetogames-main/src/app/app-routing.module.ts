import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { GameListComponent } from './pages/game-list/game-list.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: GameListComponent},
  { path: 'favorites', component: FavoritesComponent },
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
