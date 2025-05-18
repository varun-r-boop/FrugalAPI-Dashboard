import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AnalyticsSummary, EndpointAnalytics } from '../models/analytics.model';
import { AnalyticsService } from '../../services/analytics.service';
import { CommonModule } from '@angular/common';
import { IProject } from '../models/project.model';
import { ProjectService } from '../../services/project.service';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})

export class DashboardComponent implements OnInit {
  endpointAnalytics: EndpointAnalytics[] = [];
  loading = true;
  error: string = '';
  currentProject! : IProject;
  constructor(private analyticsService: AnalyticsService,private projectService : ProjectService) {
    this.projectService.currentProjectSubject.subscribe((res)=>{
      this.currentProject = res;
    })
  }

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics(): void {
    this.loading = true;
    this.analyticsService.getAnalytics(this.currentProject._id).subscribe({
      next: (data) => {
        this.endpointAnalytics = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load analytics data';
        this.loading = false;
      }
    });
  }

  // getModelDistributionData(): any[] {
  //   if (!this.endpointAnalytics) return [];
  //   return this.analytics.modelDistribution.map(item => ({
  //     name: item.model,
  //     value: item.count
  //   }));
  // }

  // getDailyCostData(): any[] {
  //   if (!this.analytics) return [];
  //   return this.analytics.dailyMetrics.map(item => ({
  //     name: new Date(item.date).toLocaleDateString(),
  //     value: item.cost
  //   }));
  // }
}