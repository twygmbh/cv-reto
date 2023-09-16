import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { JobPositionComponent } from "./components/job-position/job-position.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, JobPositionComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
