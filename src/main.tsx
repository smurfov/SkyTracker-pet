import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './shared/providers/theme/ThemeProvider.tsx'
import { store } from './store/index.ts'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<ThemeProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</QueryClientProvider>
	</StrictMode>
)
