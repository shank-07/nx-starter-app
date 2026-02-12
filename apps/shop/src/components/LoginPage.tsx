import { useState, FormEvent } from 'react';

export function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		setMessage(null);

		// Simulate API call
		setTimeout(() => {
			setIsLoading(false);
			if (email === 'user@example.com' && password === 'password123') {
				setMessage({ type: 'success', text: 'Login successful! Redirecting...' });
			} else {
				setMessage({ type: 'error', text: 'Invalid email or password.' });
			}
		}, 1500);
	};

	return (
		<div style={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: 'calc(100vh - 100px)',
			padding: '20px'
		}}>
			<div style={{
				width: '100%',
				maxWidth: '400px',
				padding: '30px',
				border: '1px solid #ddd',
				borderRadius: '12px',
				boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
				backgroundColor: 'white'
			}}>
				<h2 style={{ textAlign: 'center', marginBottom: '25px' }}>Login</h2>

				<form onSubmit={handleSubmit} id="login-form">
					<div style={{ marginBottom: '20px' }}>
						<label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email Address</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="user@example.com"
							style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}
						/>
					</div>

					<div style={{ marginBottom: '25px' }}>
						<label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Password</label>
						<input
							type="password"
							id="password"
							data-testid="login-button"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							placeholder="••••••••"
							style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px', boxSizing: 'border-box' }}
						/>
					</div>

					<button
						type="submit"
						id="login-submit"
						disabled={isLoading}
						style={{
							width: '100%',
							padding: '14px',
							backgroundColor: '#4CAF50',
							color: 'white',
							border: 'none',
							borderRadius: '6px',
							fontSize: '16px',
							fontWeight: 'bold',
							cursor: isLoading ? 'not-allowed' : 'pointer',
							opacity: isLoading ? 0.7 : 1
						}}
					>
						{isLoading ? 'Signing in...' : 'Sign In'}
					</button>
				</form>

				{message && (
					<div id="login-message" style={{
						marginTop: '20px',
						padding: '12px',
						borderRadius: '6px',
						textAlign: 'center',
						backgroundColor: message.type === 'success' ? '#e8f5e9' : '#ffebee',
						color: message.type === 'success' ? '#2e7d32' : '#c62828',
						border: `1px solid ${message.type === 'success' ? '#a5d6a7' : '#ef9a9a'}`
					}}>
						{message.text}
					</div>
				)}
			</div>
		</div>
	);
}

export default LoginPage;
