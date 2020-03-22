import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { Router, ResolveEnd } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DatabaseInterface } from '@interfaces/databaseInterface';
import { DatabaseService } from '@services/database.service';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public title = '';
  public appPages = [
    {
      title: 'Lecciones',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Diccionario',
      url: '/diccionario',
      icon: 'book'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private router: Router,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe(event => {
      const root: ResolveEnd = event as ResolveEnd;
      this.setTitle(root.url.split('/')[1]);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.getDatabase();
  }

  getDatabase() {
    this.http.get('https://raw.githubusercontent.com/litospayaso/livre/master/src/assets/database/livre-export.json').subscribe(
      (response: DatabaseInterface) => {
        console.log('%c data', 'background: #df03fc; color: #f8fc03', response);
        this.databaseService.setData(response);
      });
  }

  setTitle(root: string) {
    console.log('%c root', 'background: #df03fc; color: #f8fc03', root);
    let title = 'Livre';
    switch (root) {
      case 'diccionario':
        title = 'Diccionario';
        break;
      case 'home':
        title = 'Lecciones';
        break;
      default:
        break;
    }
    this.title = title;
    this.menu.close();
  }

}
