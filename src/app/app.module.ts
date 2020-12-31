import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import { RecipeDetailComponent } from './recipes/recipeDetail/recipeDetail.component';
import { RecipeListComponent } from './recipes/recipeList/recipeList.component';
import { ShoppingEditComponent } from './shoppingList/shoppingEdit/shoppingEdit.component';
import { RecipeItemComponent } from './recipes/recipeList/recipeItem/recipeItem.component';

@NgModule({
  declarations: [			
    AppComponent,
      HeaderComponent,
      RecipesComponent,
      RecipeDetailComponent,
      RecipeListComponent,
      RecipeItemComponent,
      ShoppingListComponent,
      ShoppingEditComponent
   ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
