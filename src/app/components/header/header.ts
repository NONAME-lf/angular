import { Component, input, output } from '@angular/core';
import { signal } from '@angular/core';
import { Input } from '../input/input';

@Component({
  selector: 'morent-header',
  imports: [Input],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  public headerTitle = input<string>('acba bank');
  public userClick = output<void>();
}
