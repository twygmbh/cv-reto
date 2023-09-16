import { Component } from "@angular/core";
import { Job } from "./entities/job.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "cv-rryter";

  jobs: Job[] = [
    {
      title: "Freelancing",
      client: "Visana",
      start: "Mar 2023",
      end: "Oct 2023",
      image: "visana_logo.png",
      descriptions: [
        "Comprehensive evaluation of the in-house developed Angular framework.",
        "Enhanced the developer experience, optimized payload size, and bolstered its reliability.",
        "Improved performance and readability by refactoring code.",
        "Aligned the framework with best practices to deliver optimal organizational value.",
        "Spearheaded initiatives to foster a culture of continuous improvement within the organization.",
        "Encouraged knowledge transfers between teams to enhance collaboration and shared understanding.",
      ],
      skills: [
        "Angular",
        "TypeScript",
        "HTML5 / SCSS",
        "Kubernetes",
        "CI / CD",
        "Tooling / NX.dev",
      ],
    },

    {
      title: "Freelancing",
      client: "LUKSO",
      start: "Jan 2021",
      end: "Feb 2022",
      image: "lukso_logo.png",
      descriptions: [
        "Authored two TypeScript-based JavaScript libraries.",
        "Enhanced websites with new E2E-tested designs and features.",
        "Developed a Go/Angular app to manage blockchain network binaries.",
        "Established CI/CD pipelines using GitHub-Actions.",
        "Initialized a Kubernetes cluster leveraging Git-Ops.",
      ],
      skills: [
        "Solidity",
        "TypeScript",
        "HTML5 / CSS3",
        "Kubernetes (GKE)",
        "CI / CD",
      ],
    },
    {
      title: "Freelancing",
      client: "Schweizerische Mobiliar",
      start: "Nov 2018",
      end: "Dec 2020",
      image: "mobi_logo_de.svg",
      descriptions: [
        "Collaborated on a significant project with over 200 developers, leading frontend development initiatives.",
        "Managed the shift from an expansive AngularJS codebase to Angular, emphasizing Reactive Programming with RxJS.",
        "Introduced and integrated development tools such as Jest, Cypress, and Storybook to optimize the workflow.",
        "Crafted a custom Chef playbook designed for an Ubuntu VM and established a specialized proxy for specific requests.",
        "Shared expertise in Angular(10+), directed RxJS rewrites, managed Jest/Cypress tests.",
      ],
      skills: [
        "Angular",
        "RxJS",
        "TypeScript",
        "Tooling",
        "HTML5 / SCSS",
        "CI/CD",
      ],
    },
    {
      title: "Freelancing",
      client: "Schweizerische Mobiliar",
      start: "Aug 2016",
      end: "Feb 2018",
      image: "mobi_logo_de.svg",
      descriptions: [
        "Developed new features and single-page applications (SPAs) within an existing AngularJS framework.",
        "Led efforts in migrating SPAs and libraries from AngularJS to the newer Angular(v7).",
        "Played a pivotal role in writing unit and end-to-end tests to ensure application robustness.",
        "Significantly decreased build times and improved the overall (frontend) developer experience.",
      ],
      skills: ["AngularJS", "Javascript / TypeScript", "Webpack", "HTML / CSS"],
    },
    {
      title: "Freelancing",
      client: "Localsearch",
      start: "Jun 2015",
      end: "Jul 2016",
      image: "localsearch_logo.svg",
      descriptions: [
        "Launched several websites within the local.ch domain.",
        "Migrated the existing blog into the newly created Locomotive CMS instance.",
        "Prepared all the instances to be ready for future CMS upgrades.",
      ],
      skills: ["Javascript", "Ruby / Locomotive CMS", "HTML / CSS"],
    },
    {
      title: "Internal",
      client: "TWY GmbH",
      start: "Sep 2015",
      end: "Nov 2015",
      image: "twy_logo.png",
      descriptions: [
        "Developed a License management web application for the existing Moba NMS Software.",
        "Features include managing licesenes, customers, supliers and so forth.",
        "Connected the application to a REST-Endpoint (JSON).",
        "License orders are imported from SAP via SOAP.",
      ],
      skills: ["AngularJS", "Javascript", "HTML / CSS"],
    },
    {
      title: "Internal",
      client: "TWY GmbH",
      start: "Apr 2014",
      end: "May 2015",
      image: "twy_logo.png",
      descriptions: [
        "Developing an AJAX content management system based on AngularJS and Ruby on Rails (backend JSON-API).",
      ],
      skills: [
        "AngularJS",
        "Ruby on Rails",
        "Javascript",
        "Ruby",
        "HTML / CSS",
        "SASS",
      ],
    },
  ];
}
