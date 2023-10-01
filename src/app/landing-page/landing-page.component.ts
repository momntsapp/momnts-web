import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {


  constructor(private seo: SeoService, private title: Title) {
  }

  ngOnInit(): void {

    this.title.setTitle('Momnts | App');

    this.seo.generateTags({
      title: 'Momnts | App',
      description: 'Momnts Social Media App by Domi, Nathan, Xin Lei & Aly',
      image: '',
      slug: 'home'
    })

}

}
