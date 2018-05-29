import { Component, OnInit, Pipe } from '@angular/core';
import { KhachhangService } from '../shared/khachhang.service';
import { Khachhang } from '../shared/khachhang.model';
import { ToastrService } from "ngx-toastr";
import { FilterPipe } from "./filter.pipe";

@Component({
  selector: 'app-khachhang-list',
  templateUrl: './khachhang-list.component.html',
  styleUrls: ['./khachhang-list.component.css']  
})
export class KhachhangListComponent implements OnInit {
  KhachhangList: Khachhang[];
  sortBy: string;
  countClick1: number = 0;
  countClick2: number = 0;
  searchTerm: string;
  constructor(public khachHangService: KhachhangService, private toast: ToastrService) { }

  ngOnInit() {
    this.khachHangService.getKhachHang().subscribe((khachhangs) => {
      this.KhachhangList = khachhangs;
      console.log(this.KhachhangList);
    });
  }

  showToForm(khachhang: Khachhang){
    this.khachHangService.selectedKhachHang = Object.assign({}, khachhang);
  }

  onDelete(id: number){
    if (confirm('Bạn có chắc muốn xóa khách hàng này không?') == true) {
      this.khachHangService.deleteKhachHang(id).subscribe(res => {
        this.khachHangService.getKhachHang();
        this.toast.warning('Xóa khách hàng thành công', 'quản lý khách hàng');
      })
    }
  }

  clickCount1(): void {
    this.countClick1 ++;
  }
  clickCount2(): void {
    this.countClick2++;
  }
  sortType(sort: string){
    if(sort === 'name' && this.countClick1 % 2 == 0){
      this.KhachhangList = this.khachHangService.khachhangList.sort(this.sortAscByName);
    }
    if(sort === 'name' && this.countClick1 % 2 != 0) {
      this.KhachhangList = this.khachHangService.khachhangList.sort(this.sortDescByName);
    }
    if (sort === 'company' && this.countClick2 % 2 == 0){
      this.KhachhangList = this.khachHangService.khachhangList.sort(this.sortAscByCompany);
    }
    if (sort === 'company' && this.countClick2 % 2 != 0) {
      this.KhachhangList = this.khachHangService.khachhangList.sort(this.sortDescByCompany);
    }
  }

  sortAscByName(n1: Khachhang, n2: Khachhang){
    if(n1.name > n2.name){
      return 1;
    }
    else if (n1.name === n2.name){
      return 0;
    }
    else{
      return -1;
    }
  }
  sortDescByName(n1: Khachhang, n2: Khachhang) {
    if (n1.name < n2.name) {
      return 1;
    }
    else if (n1.name === n2.name) {
      return 0;
    }
    else {
      return -1;
    }
  }

  sortAscByCompany(c1: Khachhang, c2: Khachhang) {
    if (c1.company > c2.company) {
      return 1;
    }
    else if (c1.company === c2.company) {
      return 0;
    }
    else {
      return -1;
    }
  }

  sortDescByCompany(c1: Khachhang, c2: Khachhang) {
    if (c1.company < c2.company) {
      return 1;
    }
    else if (c1.company === c2.company) {
      return 0;
    }
    else {
      return -1;
    }
  }
}
