import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }
  
  openCarsPage() {
    this.router.navigate(['cars'], {relativeTo: this.route})
  }

  changeAuthStatus(status: string) {
    if(status === 'login') {
      this.auth.login()
    } else {
      this.auth.logout()
    }
  }
}
