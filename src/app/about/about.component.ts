import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';

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
constructor(private seo: SeoService, private title: Title) {
}

ngOnInit(): void {

  this.title.setTitle('Momnts | About');

  this.seo.generateTags({
    title: 'Momnts | About',
    description: 'About the developers of Momnts Social Media App.',
    image: '',
    slug: 'home'
  })

}
}
