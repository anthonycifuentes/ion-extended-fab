import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-extended-fab',
  templateUrl: './extended-fab.component.html',
  styleUrls: ['./extended-fab.component.scss'],
})
export class ExtendedFabComponent implements OnInit {
  @Input() extended: boolean = true;
  @Input() event: string = 'CREATE';
  @Input() icon: string = 'add';
  @Input() color: string = 'dark';
  iconSrc: string;
  constructor() { }

  ngOnInit() {
    this.iconSrc = `assets/icon/${this.icon}.svg`; 
  }

}
