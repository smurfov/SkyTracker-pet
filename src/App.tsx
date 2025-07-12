import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './components/layout/Layout'
import { Contacts } from './pages/Contacts'
import { Favorite } from './pages/Favorite'
import { Home } from './pages/Home'
import { ROUTES } from './routes'

function App() {
	return (
		<BrowserRouter basename='/SkyTracker-pet/'>
			<Routes>
				<Route path={ROUTES.home.path} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.contacts.path} element={<Contacts />} />
					<Route path={ROUTES.favorite.path} element={<Favorite />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
