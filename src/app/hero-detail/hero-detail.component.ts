import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() test: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
  }
  getHero() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.heroService.getHero(id).subscribe(hero => {
      console.log(hero);
      
      // this.test = hero
    })
  }
  goBack() {
    this.location.back()
  }
}
