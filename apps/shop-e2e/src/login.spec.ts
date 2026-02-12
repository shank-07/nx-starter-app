import { test, expect, } from '@playwright/test';

test.describe('Login Page', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('/login');
	});

	test('should show validation errors when fields are empty', async ({ page }) => {
		const loginButton = page.locator("#login-submit"); // this will get the job done
		await loginButton.click();
		// HTML5 validation check
		const emailInput = page.locator('#email');
		const isEmailValid = await emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
		expect(isEmailValid).toBeFalsy();
	});

	test('should login successfully with correct credentials', async ({ page }) => {
		await page.fill('#email', 'user@example.com');
		await page.fill('#password', 'password123');
		await page.click('#login-submit');

		// Wait for the success message
		const message = page.locator('#login-message');
		await expect(message).toBeVisible();
		await expect(message).toHaveText('Login successful! Redirecting...');
		await expect(message).toHaveCSS('color', 'rgb(46, 125, 50)'); // Success green color
	});

	test('should show error with incorrect credentials', async ({ page }) => {
		await page.fill('#email', 'wrong@example.com');
		await page.fill('#password', 'wrongpassword');
		await page.click('#login-submit');

		// Wait for the error message
		const message = page.locator('#login-message');
		await expect(message).toBeVisible();
		await expect(message).toHaveText('Invalid email or password.');
		await expect(message).toHaveCSS('color', 'rgb(198, 40, 40)'); // Error red color
	});
});
