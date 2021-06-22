import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  public data: Array<any> = [];
  public apiURL = 'http://localhost:3000/';
  public user: any;
  public admin = environment.admin;

  constructor(
    public auth: AngularFireAuth,
    private menuCtrl: MenuController,
    public http: HttpClient
  ) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }

  ionViewWillEnter() {

    this.auth.onAuthStateChanged(
      (userData) => {

        this.user = userData.uid;

        // Obtem todos os documentos da API
        this.http.get(
          this.apiURL
          + `promocoes`)
          .subscribe(
            (res: any) => {

              // Prepara dados para a view (HTML)
              this.data = res;

            }
          );

      });
  }
  open(url) {
    window.open(url);
    return false;
  }

}


