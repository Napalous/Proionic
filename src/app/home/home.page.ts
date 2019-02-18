import { Component } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public items:any;
constructor(navCtrl: NavController, public http: HttpClient)
	{
		this.getData();
	}
	getData()
	{
		let url = 'http://localhost:8000/formatfact'; 
		let data: Observable<any> = this.http.get(url);				     
			
		data.subscribe(result =>{
		this.items=result;
		})				
	}

}
