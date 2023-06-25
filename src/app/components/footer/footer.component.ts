import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  imageUrl: string = 'assets/android.png';
  imageUrl1: string = 'assets/apple.png';
  imageUrl2: string = 'assets/royalApp.svg';
}
