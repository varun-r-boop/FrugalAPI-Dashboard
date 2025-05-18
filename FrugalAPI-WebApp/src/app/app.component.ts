import { Component, OnInit } from '@angular/core';
import { ProjectService } from './services/project.service';
import { AUTHCONSTANT } from './features/constants/auth.constant';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FrugalAPI-WebApp';
  isLoading = false;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.decodeProjectDetails();
  }

  decodeProjectDetails() {
    const jwt = localStorage.getItem(AUTHCONSTANT.FRUGALTOKEN);
    if (jwt) {
      const payload = jwtDecode(jwt) as any;
      if (payload.exp) {
        const expirationDate = new Date(payload.exp * 1000);
        const currentDate = new Date();
        if (expirationDate < currentDate) {
          localStorage.removeItem(AUTHCONSTANT.FRUGALTOKEN);
        } else {
          const projectId = payload.projectId;
          this.isLoading = true;
          this.projectService.getProjectDetailsById(projectId).subscribe({
            next: (response) => {
              if (response) {
                this.projectService.setCurrentProject(response);
              }
              this.isLoading = false;
            },
            error: (error) => {
              console.error('Error fetching project details:', error);
              this.isLoading = false;
            }
          });
        }
      }
    }
  }
}