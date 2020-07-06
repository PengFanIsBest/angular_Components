interface Icon {
  nzType: string;
  nzTheme?: string;
  nzSpin?: boolean;
  nzTwotoneColor?: string;
  nzIconfont?: string;
  nzRotate?: string;
  color?: string;
}
interface Button {
  title: string;
  link?: string;
  nzType?: string;
}
interface BottomGuide {
  button: Button;
}

interface Employ {
  title: string;
  link?: string;
}

interface Guide {
  title: string;
  link?: string;

}
export interface ItemMsg {
  icon: Icon;    // 图标
  title: string; // title
  desc: string;  // desc
  bottomGuide: BottomGuide; // btn
  employ?: Employ; // 使用
  guide?: Guide;   // 指引
}
