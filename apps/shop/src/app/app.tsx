import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '@org/shop-shared-ui';
import './app.css';
import HeavyCompute from '../components/HeavyCompute';
import PerformanceDemo from '../components/PerformanceIssues';
import BadPerformanceDemo from '../components/PerformanceIssues2';
import OptimizedPerformanceDemo from '../components/OptimsedPerformanceIssue2';
import { Counter } from '../components/Counter';
import { CounterZustand } from '../components/CounterZustand';
import { Posts } from '../components/Posts';
import { LoginPage } from '../components/LoginPage';
import { BatchUpdates } from '../components/BatchUpdates';

// Lazy load feature components
const ProductList = lazy(() => import('@org/shop-feature-products').then(m => ({ default: m.ProductList })));
const ProductDetail = lazy(() => import('@org/shop-feature-product-detail').then(m => ({ default: m.ProductDetail })));

export function App() {
	return (
		<div className="app">
			<header className="app-header">
				<div className="header-content">
					<h1 className="app-title">Nx Shop Demo</h1>
				</div>
			</header>

			<main className="app-main">
				<Suspense fallback={<LoadingSpinner />}>
					<Routes>
						<Route path="/" element={<Navigate to="/products" replace />} />
						<Route path="/products" element={<ProductList />} />
						<Route path="/products/:id" element={<ProductDetail />} />
						<Route path="/heavy-compute" element={<HeavyCompute />} />
						<Route path="/heavy-compute-2" element={<PerformanceDemo />} />
						<Route path="/heavy-compute-3" element={<BadPerformanceDemo />} />
						<Route path="/opt-heavy-compute-3" element={<OptimizedPerformanceDemo />} />
						<Route path="/counter" element={<Counter />} />
						<Route path="/counter-zustand" element={<CounterZustand />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/batch-updates" element={<BatchUpdates />} />
						<Route path="*" element={<Navigate to="/products" replace />} />
					</Routes>
				</Suspense>
			</main>
		</div>
	);
}

export default App;
