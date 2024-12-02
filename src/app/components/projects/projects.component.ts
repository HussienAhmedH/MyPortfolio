import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'My Portfolio',
      description: 'Feel free to check out the code for my portfolio on Github. It\'s open for exploration, and you\'re welcome to fork it and create your own version!',
      technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'GitHub Pages', 'Github Actions'],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/SebastianoFazzino/my-portfolio',
    },
    {
      name: "Connecting Footballer's ",
      description: 'Ever wondered why their is no social media platform for football players which can access some of other social media with their choices , built with  HTML, CSS and Bootstrap, to save them from the critique.',
      technologies: [ 'HTML', 'CSS', 'Bootstrap', 'git', ],
      src: './assets/projects/Footballers.webp',
      link: 'https://github.com/HussienAhmedH/LeagueLinkUP',
    },
    {
      name: 'Simplified Poker Game',
      description: 'Step into the world of card games with my simplified poker game project! Built with Scala 2.17.8, it features a simple console-based interface, a basic game engine and a Mongo persistent layer.',
      technologies: ['Scala', 'MongoDB', 'Mockito', 'JUnit'],
      src: './assets/projects/poker.png',
      link: '',
    },
    {
      name: 'Number Game',
      description: 'Discover an upgraded twist on the classic number game! This project integrates both frontend and backend development, using Java 11 with Spring Boot 2.7 for server-side logic and Angular 18 as user interface, styled with Bootstrap and FontAwesome',
      technologies: ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Bootstrap', 'FontAwesome'],
      src: './assets/projects/numbers.png',
      link: '',
    },
    {
      name: 'Data Science Project: The Battle of Neighborhoods',
      description: 'A data science project analyzing Tallinn\'s neighborhoods using data from Foursquare, Wikipedia, and transport sites. It identifies ideal residential areas through clustering and regression techniques.',
      technologies: ['Python', 'Jupiter Notebook', 'Pandas', 'Numpy', 'Matplotlib', 'Seaborn', 'Foursquare API'],
      src: './assets/projects/data-science.png',
      link: '',
    }
  ];
}
