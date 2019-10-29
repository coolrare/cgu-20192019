import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  count = 1;
  keyword = 'test';

  constructor() {}

  ngOnInit() {}

  search(event: MouseEvent) {
    if (event.altKey) {
      this.count += 1;
    }

    console.log(event);
  }
}
