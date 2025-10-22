import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Card } from './components/card/card';

@Component({
  selector: 'morent-root',
  imports: [RouterOutlet, Header, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = 'hello world';

  public onUserClick(): void {
    alert('Button clicked!');
  }
}
