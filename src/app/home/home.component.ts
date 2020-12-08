import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public nonHtml = 'test ala ma kota';


  public htmlText = 'test ala ma <span onmouseover=alert(1)>kota</span> albo i <span onclick="alert(2)">2</span>';
}
