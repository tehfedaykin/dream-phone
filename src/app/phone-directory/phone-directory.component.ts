import { Component, OnInit } from '@angular/core';
import { crushes } from '../../data/crushes';

@Component({
  selector: 'app-phone-directory',
  templateUrl: './phone-directory.component.html',
  styleUrls: ['./phone-directory.component.less']
})
export class PhoneDirectoryComponent implements OnInit {
  public crushes = crushes;

  constructor() { }

  ngOnInit(): void {
  }

}
