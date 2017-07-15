import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ba-card',
  templateUrl: './ba-card.component.html',
  styleUrls: ['./ba-card.component.css']
})
export class BaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() cardTitle:String;
  @Input() baCardClass:String;
  @Input() cardType:String;

}
