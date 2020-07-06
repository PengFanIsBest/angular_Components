import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Interface } from 'readline';

import { ItemMsg } from './product.item.interface';


@Component({
  selector: 'app-product-item',
  template: `
<div class='box'>
  <i class='box-i' nz-icon [nzTwotoneColor]="productMsg.icon.nzTwotoneColor||''" [ngStyle]="{color:productMsg.icon.color||''}" [nzType]="productMsg.icon.nzType||'mail'"></i>
  <strong class='box-strong'> {{productMsg.title||'标题' }}</strong>
  <div class='box-desc'>
      <div class='box-desc-list'>
          {{productMsg.desc}}
      </div>
  </div>
  <div class='box-btn'>
      <button nz-button [nzType]="productMsg.bottomGuide.button.nzType||'primary'" [routerLink]='productMsg.bottomGuide.button.link||"./"'>{{productMsg.bottomGuide.button.title}}</button>
      <a *ngIf="productMsg.employ" [routerLink]='productMsg.employ.link||"./"' class='box-btn-serve'>{{productMsg.employ.title}}</a>
      <a *ngIf="productMsg.guide" [routerLink]='productMsg.guide.link||"./"' class='box-btn-desc' >{{productMsg.guide.title}}>></a>
  </div>
</div>
`,
  styleUrls: ['./product.item.component.less']
})

/*      example...
  *    productMsg = {
  *       icon: {
  *        nzType: 'mail'
  *      },
  *      title: 'this is title',
  *      desc: ' CDN，有效解决了互联网网络拥塞问题，提升终端用户访问速度，增强网站的可用性，同时可大幅降低源站压力。',
  *      bottomGuide: {
  *        button: {
  *          title: '立即使用',
  *          link: ''
  *        }
  *      },
  *      employ: {
  *        title: '创建服务',
  *        link: ''
  *      },
  *      guide: {
  *        title: '指南',
  *         link: ''
  *       }
  *     };
*/

export class ProductItemComponent implements OnInit {
  constructor() { }
  @Input() productMsg: ItemMsg;

  ngOnInit() {


  }
}
