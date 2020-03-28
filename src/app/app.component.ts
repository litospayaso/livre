import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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
  public pageBack = '';
  public appPages = [
    {
      title: 'Liçãos',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Exercícios',
      url: '/exercises',
      icon: 'create'
    },
    {
      title: 'Pesquisador',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'Diccionario',
      url: '/diccionario',
      icon: 'book'
    },
    {
      title: 'Acerca do Livre',
      url: '/about',
      icon: 'help'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController
  ) {
    this.initializeApp();
    this.router.events.pipe(filter(event => event instanceof ResolveEnd)).subscribe(event => {
      const root: ResolveEnd = event as ResolveEnd;
      const routerName = root.url.split('/')[1];
      switch (routerName) {
        case 'lesson':
          this.pageBack = '/home';
          break;
        default:
          this.pageBack = '';
          break;
      }
      this.setTitle(routerName);
      if (root.url.split('/').length > 2) {
        this.title = this.databaseService.getAllData().lessons.find(e => e.number === Number(root.url.split('/').pop())).title;
        this.pageBack = routerName === 'evaluation' ? '/exercises' : '/home';
      } else {
        this.pageBack = '';
      }
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
    let title = 'Livre';
    switch (root) {
      case 'diccionario':
        title = 'Diccionario';
        break;
      case 'home':
        title = 'Liçãos';
        break;
      case 'exercises':
        title = 'Exercícios';
        break;
      case 'search':
        title = 'Pesquisador';
        break;
      case 'about':
        title = 'Acerca do Livre';
        break;
      case 'lesson':
        break;
      default:
        break;
    }
    this.title = title;
    this.menu.close();
  }

}
