import { AfterViewInit, Component, OnInit } from '@angular/core';

import { SpinnerItem } from './spinner-item.model';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit, AfterViewInit {
  public items = [
    new SpinnerItem(
      '../../assets/images/desktop-image-hero-1.jpg',
      '../../assets/images/mobile-image-hero-1.jpg',
      'Stylish white chairs around a table with a Banzai tree in its center',
      'Discover innovative ways to decorate',
      'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.'
    ),
    new SpinnerItem(
      '../../assets/images/desktop-image-hero-2.jpg',
      '../../assets/images/mobile-image-hero-2.jpg',
      'Three chairs, one yellow, one mint, and one white',
      'We are available all across the globe',
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    ),
    new SpinnerItem(
      '../../assets/images/desktop-image-hero-3.jpg',
      '../../assets/images/mobile-image-hero-3.jpg',
      'A black, metal, unfolded folding chair in front of a grey background',
      'Manufactured with the best materials',
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
    ),
  ];

  private maxIndex = this.items.length - 1;
  private currentIndex = 0;

  private spinnerItemsEl: HTMLUListElement;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.spinnerItemsEl = document.querySelector(
      '#spinnerItems'
    ) as HTMLUListElement;

    window.addEventListener('resize', () => {
      this.spinnerItemsEl.children[this.currentIndex].scrollIntoView(
        this.scrollOptions
      );
    });
  }

  private scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  };

  public spinLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
      this.spinnerItemsEl.children[this.currentIndex].scrollIntoView(
        this.scrollOptions
      );
    }
    console.log(this.spinnerItemsEl.children[this.currentIndex]);
  }
  public spinRight() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex += 1;
      this.spinnerItemsEl.children[this.currentIndex].scrollIntoView(
        this.scrollOptions
      );
    }
  }
}
