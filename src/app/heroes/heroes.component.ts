import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service'
import { MessageService } from '../message.service'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // selectedHero: Hero;
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Hero组件选择了id为${hero.id}的人员`)

  // }
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.check();
  }
  check(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroes = data;
    })
  }
  add(name: String): void {
    name = name.trim();
    if (!name) {
      return
    }
    this.heroService.addHero({ name } as Hero).subscribe(test => {
      this.heroes.push(test)
    })
  }
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h != hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
