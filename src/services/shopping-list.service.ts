import { Ingredient } from "../model/Ingredient";
 export class ShoppingListService{
    private ingredients: Ingredient[]=  [];

    addItem(name: string, amount: number){
        this.ingredients.push(new Ingredient(name, amount));
    }
    addItems(items: Ingredient[]){
        this.ingredients.push(...items);
    }
    getItems(){
        return this.ingredients.slice();
    }
    removeItem(index: number){
        this.ingredients.splice(index, 1);
    }
 }
