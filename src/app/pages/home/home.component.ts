import { Component, OnInit } from '@angular/core';
// import {Renderer2} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public experiences: String[] = [];
  public freelances: String[] = [];
  public competences: String[] = [];
  public certifications: String[] = [];
  public languages: String[] = [];
  // constructor(private renderer: Renderer2) { }
  constructor() {
    // for (let index = 1; index <= 11; index++) {
    //   const workexperience = {
    //     id: index,
    //     company: "company",
    //     content: 'CONTENTS.CONT_' + index.toString()
    //   };
    //   this.experiences.push(contentObj);
    // }


   }
  // renderExternalScript(src: string): HTMLScriptElement {
  //   const script = document.createElement('script');
  //   script.type = 'text/javascript';
  //   script.src = src;
  //   script.async = true;
  //   script.defer = true;
  //   this.renderer.appendChild(document.body, script);
  //   return script;
  // }

  ngOnInit(): void {
    // this.renderExternalScript('../../assets/plugins/github-calendar/dist/github-calendar.min.js').onload = () => {
      console.log('Google API Script loaded');


    // this.loadExternalScript('../assets/plugins/popper.min.js');
    // this.loadExternalScript('../assets/plugins/bootstrap/js/bootstrap.min.js');
    this.loadExternalScript('../assets/plugins/vanilla-rss/dist/rss.global.min.js');

    this.loadExternalScript('../assets/plugins/dark-mode-switch/dark-mode-switch.min.js');
    this.loadExternalScript('../assets/plugins/github-calendar/dist/github-calendar.min.js');
    // this.loadExternalScript('../assets/plugins/github-activity/src/github-activity.js')
    this.loadExternalScript('../assets/js/main.js')
    // }

    // new GitHubCalendar("#github-graph", "gascarzah", { responsive: true });
    // GitHubCalendar(".calendar", "your-username", { responsive: true });

  }

  public loadExternalScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);


  }

}
