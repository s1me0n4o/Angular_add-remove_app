import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductsComponent } from './components/products/products.component';

const appRoutes: Routes = [
    {
      path: 'user',
      component: UserComponent
    },
    {
      path: 'product',
      component: ProductsComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
