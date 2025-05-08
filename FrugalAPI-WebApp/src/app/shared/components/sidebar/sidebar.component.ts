import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menuItems = [
    {
      path: '/dashboard',
      icon: 'fa-solid fa-chart-line',
      label: 'Dashboard'
    },
    {
      path: '/api-token',
      icon: 'fa-solid fa-shield-halved',
      label: 'API Token'
    }
  ];
} 