import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl : string = "../assets/album.json";
  constructor(private _http: Http) { }
  private extractAlbum(response: Response){
    let body = response.json();
    return body || {};
  }
  private handleError(error:any){
    console.error('Observable error:', error);
    return Observable.throw(error.statusText);
  }
  getAlbum(id : number) : Observable<any> {
    return this._http.get(this._albumUrl).map(this.extractAlbum);
  }
}
