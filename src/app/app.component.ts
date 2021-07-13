import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  points = [];
  signatureImage;

  showImage(data) {
    this.signatureImage = data;
  }
}
