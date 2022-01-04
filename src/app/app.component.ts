import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gascarzah';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es', 'fr']);
    translate.setDefaultLang('en');

    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/es|en|fr/) ? browserLang : 'fr');

    // for (let index = 1; index <= 11; index++) {
    //   const contentObj = {
    //     id: index,
    //     content: 'CONTENTS.CONT_' + index.toString()
    //   };
    //   this.contents.push(contentObj);
    // }
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
