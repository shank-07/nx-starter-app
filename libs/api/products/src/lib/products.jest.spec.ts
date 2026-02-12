
import { ProductsService } from './products.service';
// import { describe, it, expect } from "@jest/globals";

const productService = new ProductsService();

describe('Test Product Service', () => {
	it('should return categories', () => {
		const categories = productService.getCategories(); // we will get categories from database
		expect(categories.length).toBeGreaterThan(0);
	});

	it('categories must have electronics as line item', () => {
		const categories = productService.getCategories();
		expect(categories).toContain('Electronics');
	});

	it('custom checks', () => {
		const categories = productService.getCategories();
		expect(categories).toContain('Electronics');
	});
});
