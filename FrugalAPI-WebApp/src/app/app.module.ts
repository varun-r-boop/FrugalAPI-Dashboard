import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {  NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { LoadingInterceptor } from "./core/interceptor/loading.interceptor";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SidebarComponent,
    AppRoutingModule,
    RouterModule.forRoot([]) // Replace [] with your actual routes
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
