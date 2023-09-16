import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Job } from "src/app/entities/job.model";

@Component({
  selector: "app-job-position",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./job-position.component.html",
  styleUrls: ["./job-position.component.scss"],
})
export class JobPositionComponent {
  @Input() details: Job;
}
