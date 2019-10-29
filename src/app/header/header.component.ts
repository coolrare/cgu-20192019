import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 1;
  keyword = 'test';
  isHighlight = false;
  fontSize = 24;

  @Output() searchKeyword = new EventEmitter();

  search(event: MouseEvent) {

    this.searchKeyword.emit(this.keyword);

    if (event.altKey) {
      this.count += 1;
    }

    console.log(event);

    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
  }

  constructor() {}

  ngOnInit() {}
}
