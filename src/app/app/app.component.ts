import { Component } from '@angular/core'
import { NavigationItem } from "./types/navigation"
import {
  actionSettingsChangeTheme,
  actionSettingsToggleNavigationCollapse,
  SettingsFacadeService,
  Theme,
} from '../core/settings'
import { UiFacadeService } from '../core/ui'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
})
export class AppComponent {
  title = 'Bookish Guacamole'

  isMobile$ = this.uiFacadeService.isMobile$

  theme$ = this.settingsFacadeService.theme$
  isDarkTheme: boolean = false
  themeSubscription: Subscription

  navigationCollapsed$ = this.settingsFacadeService.navigationCollapsed$
  sideNavCollapsed: boolean = true
  navigationCollapseSubscription: Subscription

  constructor(
    private settingsFacadeService: SettingsFacadeService,
    private uiFacadeService: UiFacadeService,
  ) {
    this.themeSubscription = this.theme$.subscribe((theme: Theme) => {
      this.isDarkTheme = theme === 'dark'
    })

    this.navigationCollapseSubscription = this.navigationCollapsed$.subscribe((collapsed: boolean) => {
      this.sideNavCollapsed = collapsed
    })
  }

  navigationItems: NavigationItem[] = [
    {
      path: '/about',
      label: 'About',
      icon: 'info',
    },
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: 'space_dashboard',
    },
    {
      path: '/typography',
      label: 'Typography',
      icon: 'text_fields',
    },
    {
      path: '/icons',
      label: 'Icons',
      icon: 'insert_emoticon',
    },
    {
      path: '/forms',
      label: 'Forms',
      icon: 'dns',
    },
    {
      path: '/cards',
      label: 'Cards',
      icon: 'crop_original',
    },
    {
      path: '/charts',
      label: 'Charts',
      icon: 'bar_chart',
    },
  ]

  onThemeToggle() {
    const theme: Theme = this.isDarkTheme ? 'default' : 'dark'

    this.settingsFacadeService.dispatch(actionSettingsChangeTheme({ theme }))
  }

  onNavigationCollapseToggle() {
    const navigationCollapsed: boolean = !this.sideNavCollapsed

    this.settingsFacadeService.dispatch(actionSettingsToggleNavigationCollapse({ navigationCollapsed }))
  }
}
