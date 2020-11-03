import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  private headerWrapperEl: HTMLElement;
  private menuOpen = false;
  private menuList: HTMLUListElement;

  constructor() {}

  ngOnInit(): void {
    this.headerWrapperEl = document.querySelector(
      '#headerWrapper'
    ) as HTMLElement;

    this.menuList = this.headerWrapperEl.querySelector(
      'ul'
    ) as HTMLUListElement;

    window.addEventListener('click', (event) => {
      if (!this.menuList.contains(<Node>event.target)) {
        this.headerWrapperEl.classList.remove('menuOpen');
        this.menuOpen = false;
      }
    });

    let menuToggle = this.headerWrapperEl.querySelector(
      '#menuToggle'
    ) as HTMLButtonElement;

    window.addEventListener('touchstart', (event) => {
      if (
        !this.menuList.contains(<Node>event.target) &&
        !menuToggle.contains(<Node>event.target)
      ) {
        this.headerWrapperEl.classList.remove('menuOpen');
        this.menuOpen = false;
      }
    });
  }

  public toggleMenu(event: MouseEvent) {
    event.stopPropagation();
    if (this.menuOpen) {
      this.headerWrapperEl.classList.remove('menuOpen');
    } else {
      this.headerWrapperEl.classList.add('menuOpen');
    }
    this.menuOpen = !this.menuOpen;
  }
}
