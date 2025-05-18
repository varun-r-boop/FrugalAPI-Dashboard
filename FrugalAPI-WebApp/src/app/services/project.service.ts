import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IProject } from "../features/models/project.model";
import { AUTHCONSTANT } from "../features/constants/auth.constant";
import { jwtDecode } from "jwt-decode";
import { environment } from "../enviroment/enviroment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private API_URL = environment.apiUrl + 'projects'; // Update with your API URL
  public currentProjectSubject = new BehaviorSubject<IProject>({} as IProject);
  constructor(private http: HttpClient) {
 
  }

  setCurrentProject(project: IProject) {
    this.currentProjectSubject.next(project);
  }


  getProjectDetailsById(projectId : string): Observable<IProject> {
    return this.http.get<IProject>(`${this.API_URL}/${projectId}`);
  }

} 