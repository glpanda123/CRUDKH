import { Component, OnInit } from '@angular/core';
import { KhachhangService } from '../shared/khachhang.service';
import { FormsModule, Validators, NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
// import { FormsModule,  } from '@angular/forms';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit {

  constructor(public khachhangService: KhachhangService, private toast: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.khachhangService.selectedKhachHang = {
      id: null,
      name: '',
      company: '',
      email: '',
      phone: ''
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
      this.khachhangService.postKhachHang(form.value).subscribe(data => {
        this.resetForm(form);
        this.khachhangService.getKhachHang();
        this.toast.success('Thêm khách hàng mới thành công', 'Quản lý khách hàng');
      });
    }
    else{
      this.khachhangService.putKhachHang(form.value.id, form.value).subscribe(data => {
        this.resetForm(form);
        this.khachhangService.getKhachHang();
        this.toast.info('Sửa thông tin khách hàng thành công', 'Quản lý khách hàng');
      });
    }

  }
}
