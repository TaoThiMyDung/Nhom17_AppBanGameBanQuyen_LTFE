import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //   <router-outlet></router-outlet>
  // `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mdb5-angular-ui-kit-pro-advanced';
  data: any[] =[];

  ngOnInit(): void {
    this.title = 'Hello World';
    this.data = [
      [1, 'Nguyễn Văn A', '18130000', 'DH18DT', 10],
      [2, 'Nguyễn Văn B', '18130000', 'DH18DT', 10],
      [3, 'Nguyễn Văn C', '18130000', 'DH18DT', 10],
      [4, 'Nguyễn Văn D', '18130000', 'DH18DT', 10],
      [5, 'Nguyễn Văn E', '18130000', 'DH18DT', 10],
      [6, 'Nguyễn Văn F', '18130000', 'DH18DT', 10],
      [7, 'Nguyễn Văn G', '18130000', 'DH18DT', 10],
      [8, 'Nguyễn Văn H', '18130000', 'DH18DT', 10],
      [9, 'Nguyễn Văn I', '18130000', 'DH18DT', 10],
    ];
  }
}
