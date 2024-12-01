import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'popup',
  standalone: true,
  imports: [NgIf],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  showPopup = false;

  ngOnInit(): void {
    const hasSeenPopup = sessionStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      this.showPopup = true;
    }
  }

  closePopup(): void {
    this.showPopup = false;
    sessionStorage.setItem('hasSeenPopup', 'true');
  }

  onOverlayClick(): void {
    this.closePopup();
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
