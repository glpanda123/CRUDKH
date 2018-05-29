import { Component, OnInit } from '@angular/core';
import { KhachhangService } from "./shared/khachhang.service";

@Component({
  selector: 'app-khachhangs',
  templateUrl: './khachhangs.component.html',
  styleUrls: ['./khachhangs.component.css'],
  providers: [KhachhangService]
})
export class KhachhangsComponent implements OnInit {

  constructor(private khachHangService: KhachhangService) { }

  ngOnInit() {
  }

}
