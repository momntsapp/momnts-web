import { Component, OnInit } from '@angular/core';
import { SeoService } from '../seo.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  constructor(private seo: SeoService, private title: Title) {
  }

  ngOnInit(): void {

    this.title.setTitle('Momnts | 404');

    this.seo.generateTags({
      title: 'Momnts | 404',
      description: 'Momnts Social Media App by Domi, Nathan, Xin Lei & Aly',
      image: '',
      slug: 'home'
    })

}
}
