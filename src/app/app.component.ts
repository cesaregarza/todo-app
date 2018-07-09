import { Component } from '@angular/core';
import { Todoclass } from './todoclass';
import { Default_Todo } from './default-todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  todos = Default_Todo;
  anyedited = false;
  sortdesc = true;
  newtask = false;
  properties = [
    "todoname",
    "editable",
    "checked",
    "created",
    "priority",
    "expiration",
    "repeat"
  ];
  filter = 0;
  repeat = 0;
  newobj = new Todoclass();
  newobjdate = false;
  editobjdate = false;
  tempdate = new Date();
  tempdatex = new Date();
  tbdeleted = -1;
  hover = -1;


  name = `Cesar`;

  addNewTask(){
  //Initialize! Errorcount is just to be flexible in case we want to add true verification later. We use loose comparison "==" to check for both null and undefined. Using strict comparison "===" would only check for null.

   let errorcount = 0;
   if (this.newobj.todoname == null){
     errorcount++;
   }
   if (this.newobj.priority == null){
     this.newobj.priority = 4;
   }
   this.newobj.checked = false;
   this.newobj.created = new Date(Date.now());
   this.newobj.editable = false;
   this.newobj.repeat = this.repeat;
   
   //if we don't find errors, go ahead and push it to the list and run newTodo to clean up and go back to the main screen
   if (errorcount == 0){
     this.todos.push(this.newobj);
     this.newTodo();
   }
  }


  newTodo(){
    //clear out the old information
    if (this.newtask == true){
      this.newobj = new Todoclass();
      this.newobjdate = false;
      this.repeat = 0;
    } else {
      this.newobj.priority = 4;
    }
    //flip the switch
    this.newtask = !this.newtask;
    this.filter = 0;
  }

  parseDate(){
    console.log(this.newobj.expiration);
    this.tempdate = new Date(this.newobj.expiration);
    this.newobj.dueday = 1 >> ((this.tempdate.getDay()) % 7);
  }
  parseDatex(input: number){
    this.tempdatex = new Date(this.todos[input].expiration);
    this.todos[input].dueday = 1 >> ((this.tempdate.getDay()) & 7);
  }

  reSort(prop: number, order: number){
    
  }
  filterPress(input: number) {
    //Using binary logic, XOR 2 to the power of the filter ID, starting at 0 for Sunday and ending at 6 for Saturday. This ensures that each number has its own binary representation. The filter for Sunday, for example, will only be 0000001 for Sunday, 1000000 for Saturday, and 1000001 for Saturday AND Sunday. XOR will compare the current filter and assign a 1 if the current overall filter and the filter button being pressed have different bits, and a 0 if they have the same bits. In essence, it's establishing a toggle. If it's already on, XORing the 1's will put out a 0 at that ID, and if it's off, XORing the 1 of the filter being applied and the 0 of the current filter will put out a 1 at that ID.
    this.filter ^= 1 << input;
  }

  repeatPress(input: number) {
    this.repeat ^= 1 << input;
  }
  
  repeatPressx(input: number, indexx: number){
    this.todos[indexx].repeat ^= 1 << input;
  }

  displayFilter(input: number){
    //We're first going to make sure that this function won't break even if the value of repeat, since the class Todoclass has it defined as optional, is not instantiated. So if repeat is not defined, we're always going to return as true.
    if (this.todos[input].repeat == undefined){
      return true;
    }
    //We're still catching if repeat is given a value of zero, and we're also making sure we display all elements if the filter is not being applied.
    if (this.todos[input].repeat == 0 || this.filter == 0){
      return true;
    } else {
      //Here we use bitwise and to only flag as true if the repeat value includes the filter. This is similar to the XOR logic above, but bitwise AND will return a 1 at every digit that is a 1 on both numbers you're comparing. So, in the case that repeat = 3 (sunday and monday, 1+2 = 3) and the filter is at 50 (monday, thursday, and friday, 2+16+32 = 50), it will return 1.
      var temp = this.todos[input].repeat & this.filter;
      return (temp > 0) ? true : false;
    }
  }

  cancelTodo(input: number) {
    this.todos[input].editable = false;
    this.anyedited = false;
  }

  activeFilter(input: number, indexx: number) {
    let p = this.todos[indexx].repeat & (1 << input);
    return (p > 0) ? true : false;
  }

  //create an array of todos
  editTodo(input: number) {
    this.todos[input].editable = true;
    this.anyedited = true;
    this.editobjdate = (this.todos[input].dueday != null) ? true: false;
  }

  deleteTodo(input: number) {
    if (this.tbdeleted == input){
      this.todos.splice(input,1);
      this.tbdeleted = -1;
      this.hover = -1;
    } else {
      this.tbdeleted = input;
    }
  }

  finishEdit(input: number){
    let errorcount = 0;
    if (this.todos[input].todoname == null){
      errorcount++;
    }

    if (this.editobjdate == false) {
      this.todos[input].dueday = null;
      this.todos[input].expiration = null;
    }

    if (errorcount == 0){
      this.anyedited = false;
      this.todos[input].editable = false;
    }

  }
  
}
