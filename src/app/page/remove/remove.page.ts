import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.page.html',
  styleUrls: ['./remove.page.scss'],
})
export class RemovePage implements OnInit {
  public id: string;
  public apiURL = 'http://localhost:3000/';

  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.delete(this.apiURL + `promocoes/${this.id}`).subscribe(() => {
      console.log('apagado');
    });

  }

  ngOnInit() {

  }

}
