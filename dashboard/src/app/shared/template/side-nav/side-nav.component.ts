import { Component } from '@angular/core';
import { ROUTES } from './side-nav-dev-routes.config';
import { ThemeConstantService } from '../../services/theme-constant.service';


@Component({
    selector: 'app-sidenav',
    templateUrl: './side-nav.component.html'
})

export class SideNavComponent {

    public menuItems: any[]
    isFolded: boolean;
    isSideNavDark: boolean;

    constructor(
        private themeService: ThemeConstantService,
    ) {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.themeService.isMenuFoldedChanges.subscribe(isFolded => this.isFolded = isFolded);
        this.themeService.isSideNavDarkChanges.subscribe(isDark => this.isSideNavDark = isDark);

    }

    ngOnInit(): void {

    }
}
