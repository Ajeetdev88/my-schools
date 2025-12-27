import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {
 profileOpen = false;
   sidebarOpen = true;   // desktop default
  isMobile = false;

  constructor() {
    this.checkScreen();
    window.addEventListener('resize', () => this.checkScreen());
  }

  checkScreen() {
    this.isMobile = window.innerWidth <= 768;
    if (this.isMobile) {
      this.sidebarOpen = false; // mobile default closed
    }
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  toggleProfile() {
    this.profileOpen = !this.profileOpen;
  }

  logout() {
    alert('Logged out');
    // clear token, redirect to login
  }

  @HostListener('document:click', ['$event'])
  
  closeOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.profile-wrapper')) {
      this.profileOpen = false;
    }
  }
  
}
