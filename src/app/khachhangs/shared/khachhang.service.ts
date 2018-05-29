import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from "@angular/http";
import { Khachhang } from './khachhang.model';
import { Observable } from 'rxjs/Observable';
import { environment } from "../../../environments/environment";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class KhachhangService {

  webAPIURL = environment.APIURL;
  selectedKhachHang: Khachhang;
  khachhangList: Khachhang[] = [];
  constructor(public http: Http) { }

  //thêm khách hàng
  postKhachHang(khachhang: Khachhang): Observable<Khachhang> {
    let body = JSON.stringify(khachhang);
    let headerOption = new Headers({'Content-Type': 'application/json'});
    let reqOption = new RequestOptions({method: RequestMethod.Post, headers: headerOption});
    return this.http.post(this.webAPIURL, body, reqOption).map(res => res.json());
  }

  //sửa khách hàng
  putKhachHang(id: number, khachhang: Khachhang): Observable<Khachhang>{
    let body = JSON.stringify(khachhang);
    let headerOption = new Headers({ 'Content-Type': 'application/json' });
    let reqOption = new RequestOptions({ method: RequestMethod.Put, headers: headerOption });
    return this.http.post(this.webAPIURL + '/' + id, body, reqOption).map(res => res.json());
  }


  //hiển thị toàn bộ khách hàng
  // getKhachHang(){
  //   return this.http.get(this.webAPIURL).map((data: Response) => {
  //     return data.json() as Khachhang[];
  //   }).toPromise().then(res => {
  //     this.khachhangList = res;
  //   })
  // }

  getKhachHang(): Observable<Khachhang[]>{
    return this.http.get(this.webAPIURL).map(res => {
      this.khachhangList = res.json();
      return this.khachhangList.map((khachhang) => new Khachhang(khachhang));
      // return khachHangs.map((khachhang) => new Khachhang(khachhang));
    });
  }

  //xóa khách hàng
  deleteKhachHang(id: number): Observable<Khachhang>{
    return this.http.delete(this.webAPIURL + '/' + id).map(res => res.json());
  }
}


