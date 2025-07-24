import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'
import { ROUTES } from './routes'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const Contacts = lazy(() => import('./pages/Contacts'))
const Favorite = lazy(() => import('./pages/Favorite'))

function App() {
	return (
		<BrowserRouter basename='/SkyTracker-pet/'>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={ROUTES.home.path} element={<Layout />}>
						<Route index element={<Home />} />
						<Route path={ROUTES.contacts.path} element={<Contacts />} />
						<Route path={ROUTES.favorite.path} element={<Favorite />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}

export default App
