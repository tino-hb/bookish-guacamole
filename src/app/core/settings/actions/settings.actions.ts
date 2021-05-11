import { createAction, props } from '@ngrx/store'

import { Theme } from '../types/setting'

export const actionSettingsChangeTheme = createAction(
  '[Settings] Change Theme',
  props<{ theme: Theme }>(),
)
