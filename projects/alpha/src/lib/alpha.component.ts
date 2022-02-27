import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-alpha',
  template: `
    <p>
      alpha works!
    </p>
  `,
  styles: [
  ]
})
export class AlphaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
