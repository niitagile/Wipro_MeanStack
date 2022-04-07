import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  public name :string="";
  public desc:string="";
  show: Boolean=false;

  createmem=new FormGroup({
    name: new FormControl(''),
    desc: new FormControl('')
  })
  addmem()
  {
   
    console.log(this.createmem.value);
    this.name=this.createmem.value.name;
    this.desc=this.createmem.value.desc;
    this.createmem.reset({});
    this.show=true;

  }
}
