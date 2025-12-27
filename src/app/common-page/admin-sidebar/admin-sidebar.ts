import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-sidebar',
  imports: [],
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {
 sidebarOpen: boolean|false = true;   // default to open
 toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
}
