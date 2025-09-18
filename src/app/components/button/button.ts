import { Component } from '@angular/core';

@Component({
  selector: 'morent-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  onClick() {
    console.log('Button clicked!');
  }
}
