import { createContext } from 'react'
import type { IThemeContext } from '../../types/theme.types'

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)
