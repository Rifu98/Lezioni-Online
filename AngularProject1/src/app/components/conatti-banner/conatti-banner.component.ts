import { Component, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-conatti-banner',
  templateUrl: './conatti-banner.component.html',
  styleUrls: ['./conatti-banner.component.css']
})
export class ConattiBannerComponent {
  unbounded = true
  centered = true

  waRedirect() {
    this.document.location.href = 'https://wa.me/+393279874194'
  }

  fbRedirect() {
    this.document.location.href = 'https://www.facebook.com/Lezioniprivateonlineripetizioni'
  }

  constructor(@Inject(DOCUMENT) private document: Document) { }
}
