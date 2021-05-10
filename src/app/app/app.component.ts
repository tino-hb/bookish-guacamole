import { Component, OnInit } from '@angular/core'
import { Observable } from "rxjs"
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout"
import { map, shareReplay } from "rxjs/operators"
import { NavigationItem } from "./types/navigation"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
  ],
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
  title = 'Bookish Guacamole'

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
  ]

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay(),
    )
}
