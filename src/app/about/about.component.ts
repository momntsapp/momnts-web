import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  showText: boolean = false;

  toggleText() {
    this.showText = !this.showText;
}
}
