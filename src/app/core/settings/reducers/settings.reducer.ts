import { Action, createReducer, on } from '@ngrx/store'

import { SettingsState } from '../types/setting'
import { actionSettingsChangeTheme } from '../actions/settings.actions'

export const initialState: SettingsState = {
  theme: 'default',
}

const reducer = createReducer(
  initialState,
  on(
    actionSettingsChangeTheme,
    (state, action) => ({ ...state, ...action }),
  ),
)

export function settingsReducer(
  state: SettingsState | undefined,
  action: Action,
) {
  return reducer(state, action)
}
