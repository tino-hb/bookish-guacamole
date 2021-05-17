import { Injectable } from '@angular/core'
import { Store, Action, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { State, Theme } from '../types/setting'
import { selectSettingsTheme } from '../selectors/settings.selectors'

@Injectable()
export class SettingsFacadeService {
	theme$: Observable<Theme>

	constructor(private store: Store<State>) {

	  this.theme$ = store.pipe(select(selectSettingsTheme))
	}

	dispatch(action: Action) {
	  this.store.dispatch(action)
	}
}
