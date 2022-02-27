import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-beta',
  template: `
    <p>
      beta works!
    </p>
  `,
  styles: [
  ]
})
export class BetaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
