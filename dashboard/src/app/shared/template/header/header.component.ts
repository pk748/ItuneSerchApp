import { Component } from '@angular/core';
import { ThemeConstantService } from '../../services/theme-constant.service';
import { Router, ActivatedRoute, RouterStateSnapshot, RouterState } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {

  searchVisible: boolean = false;
  quickViewVisible: boolean = false;
  showLogoutAdminBtn: boolean = false;
  showLogoutUserBtn: boolean = false;
  switchValue: boolean = false;
  showLogoWHT: boolean = true;
  showLogoDRK: boolean = false
  
  isFolded: boolean;
  isExpand: boolean;
  header_email: string;
  user_type: string = '';
  managed_user_type:string = '';

  optionList = [
    { label: 'Dev', value: 'dev' },
    { label: 'Staging', value: 'stage' },
    { label: 'QA', value: 'Qa' },
    { label: 'Production', value: 'prod' }
  ];
  selectedValue = { label: 'Production', value: 'prod' };
  compareFn = (o1: any, o2: any) => (o1 && o2 ? o1.value === o2.value : o1 === o2);

  constructor(
    private themeService: ThemeConstantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    localStorage.setItem('input_cl_dark', '#d0e8f2');
    localStorage.setItem('input_cl_light', '#fff')
   }

  ngOnInit(): void {

    Auth.currentAuthenticatedUser().then((response) => {
      this.header_email = response.username;
        this.managed_user_type = "Admin";
        this.showLogoutUserBtn = false
        this.showLogoutAdminBtn = true;

    })
      .catch((error) => {
        if (error == 'not authenticated') {
        }
      })

    this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
    this.themeService.isExpandChanges.subscribe(isExpand => this.isExpand = isExpand);
  }

  toggleFold() {
    this.isFolded = !this.isFolded;
    this.themeService.toggleFold(this.isFolded);
  }

  toggleExpand() {
    this.isFolded = false;
    this.isExpand = !this.isExpand;
    this.themeService.toggleExpand(this.isExpand);
    this.themeService.toggleFold(this.isFolded);
  }

  quickViewToggle(): void {
    this.quickViewVisible = !this.quickViewVisible;
  }

  //environment
  onChangeEnv(value: { label: string; value: string; }): void {
  }

  //logout
  logout() {
   

    


    this.router.navigate(['/authentication/login']);
  }

 

  openLogoutBtn(){
    
  }

  changeMode() {
    console.log(this.switchValue)
    if (this.switchValue == true) {
      localStorage.setItem('card', "#27293d");
      // localStorage.setItem('input_css_1', "#d0e8f2");


      document.body.style.backgroundColor = "#27293d ";
      document.getElementById("side-nav").style.background = "#1e1e2f";
      document.getElementById("side-nav").style.borderRight = "1px solid #ddd";
      document.getElementById("sid_nav_a").style.background = "#1e1e2f";




      document.getElementById("header").style.background = "#1e1e2f";
      document.getElementById("header").style.borderBottom = " 1px solid #1e1e2f";
      document.getElementById("header").style.color = "#0779e4";
      // document.getElementById("desktop-toggle").style.color = "#fff";
      document.getElementById("sid_nav_ui").style.background = "#1e1e2f";
      document.getElementById("sid_nav_li").style.background = "#1e1e2f";
      document.querySelector("div").classList.remove('input_css');

      this.showLogoWHT = false;
      this.showLogoDRK = true

    } else {
      localStorage.setItem('card', "#fff");
      // localStorage.setItem('input_css_1', "#fff");


      document.body.style.backgroundColor = "#f9fbfd";
      document.getElementById("side-nav").style.background = "#fff";
      document.getElementById("side-nav").style.borderRight = "1px solid #fff";
      document.getElementById("sid_nav_a").style.background = "#fff";
      this.showLogoWHT = true;
      this.showLogoDRK = false
      document.getElementById("header").style.background = "#fff";
      document.getElementById("sid_nav_ui").style.background = "#fff";
      document.getElementById("sid_nav_li").style.background = "#fff";
      // document.getElementById("desktop-toggle").style.color = "#000";
      document.getElementById("header").style.border = "1px solid #edf2f9";
      document.getElementById("header").style.color = " #000";
      document.querySelector("div").classList.remove('input_css');

    }
  }


}
