import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/interfaces/monster.interface';
import { MonstersService } from 'src/app/services/monsters.service';

@Component({
  selector: 'app-details-objects2',
  templateUrl: './details-objects2.component.html',
  styleUrls: ['./details-objects2.component.css']
})
export class DetailsObjects2Component implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private monsterService: MonstersService) { }

  data!: Monster;
  id: any = this.activatedRouter.snapshot.paramMap.get("id");

  ngOnInit(): void {
    this.monsterService.getMonstersById(this.id).subscribe((monster: any) => {
      console.log(monster);
      return this.data = monster[0];
    })
  }


}
