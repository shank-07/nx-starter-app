
import { ProductsService } from './products.service';

const productService = new ProductsService();

describe('Test Product Service', () => {
	it('should return categories', () => {
		const categories = productService.getCategories();
		expect(categories.length).toBeGreaterThan(0);
	});

	it('categories must have electronics as line item', () => {
		const categories = productService.getCategories();
		// expect(categories).includes("Electronics")
		expect(categories).toContain('Electronics');
	});

	it('custom checks', () => {
		const categories = productService.getCategories();
		expect(categories).toContain('Electronics');
	});
});
