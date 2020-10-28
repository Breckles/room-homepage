import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private headerWrapperEl: HTMLElement;
  private menuOpen = false;

  constructor() {}

  ngOnInit(): void {
    this.headerWrapperEl = document.querySelector(
      '#headerWrapper'
    ) as HTMLElement;
  }

  public toggleMenu() {
    if (this.menuOpen) {
      this.headerWrapperEl.classList.remove('menuOpen');
    } else {
      this.headerWrapperEl.classList.add('menuOpen');
    }
    this.menuOpen = !this.menuOpen;
  }
}
