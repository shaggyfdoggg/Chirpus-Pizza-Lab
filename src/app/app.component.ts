import { Component } from '@angular/core';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';
  allItems:MenuItem[] = [
    {
      name: "Chicken Fingers",
      category: "dinner",
      price: 11.99
    },
    {
      name: "Pizza",
      category: "dinner",
      price: 11.99
    },
    {
      name: "Wings",
      category: "sides",
      price: 8.99
    },
    {
      name: "Breadsticks",
      category: "sides",
      price: 4.99
    },
    {
      name: "Ceaser Salad",
      category: "salads",
      price: 5.99
    },
    {
      name: "Cinnamon Roll",
      category: "dessert",
      price: 8.99
    },
  ]
    

    getByCategory(cat: string):MenuItem[]{
      let menuItems: MenuItem[] = [];
      this.allItems.forEach((c) => {

        if(c.category == cat)
      {
        menuItems.push(c);
      }
    })
    return menuItems;
  };
  
  getUniqueCategory():string[]{
    let result:string [] = [];
    this.allItems.forEach((c) => {
      if(result.includes(c.category) == false)
      {
        result.push(c.category)
      }
    });
    return result;
  };


}



