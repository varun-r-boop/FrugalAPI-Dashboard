import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-tokens',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './apiTokens.component.html',
  styleUrl: './apiTokens.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiTokensComponent implements OnInit {
  apiToken: string | null = null;
  isTokenGenerated = false;
  showCopiedMessage = false;

  ngOnInit() {
    // Check if token exists in localStorage
    const savedToken = localStorage.getItem('apiToken');
    if (savedToken) {
      this.apiToken = savedToken;
      this.isTokenGenerated = true;
    }
  }

  generateToken() {
    if (!this.isTokenGenerated) {
      // Generate a random token (32 characters)
      const token = 'frugal_' + Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
      
      this.apiToken = token;
      this.isTokenGenerated = true;
      
      // Save token to localStorage
      localStorage.setItem('apiToken', token);
    }
  }

  copyToken() {
    if (this.apiToken) {
      navigator.clipboard.writeText(this.apiToken).then(() => {
        this.showCopiedMessage = true;
        setTimeout(() => {
          this.showCopiedMessage = false;
        }, 2000);
      });
    }
  }
}
