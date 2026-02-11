import { Product } from '@org/models';
import type { Meta, StoryObj } from '@storybook/react';
// import { ProductDetailsCard, Product } from './product-details-card';
import { lazy, Suspense } from 'react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ProductDetailsCardProps } from "@org/shop-feature-product-detail";
// import { ProductDetailsCardProps } from "@org/shop-feature-product-detail";
import { expect, fn, userEvent, within, waitFor } from 'storybook/test';
import { ProductDetailsCard as ProductDetailCard } from './product-details-card';

// const ProductDetailCard = lazy(() => import('@org/shop-feature-product-detail').then(m => ({ default: m.ProductDetailsCard })));

// -----------------------------
// Mock Product
// -----------------------------
const mockProduct: Product = {
	id: '1',
	name: 'iPhone 15',
	category: 'Electronics',
	price: 999,
	rating: 4.5,
	reviewCount: 120,
	description: 'Latest iPhone model with advanced features.',
	imageUrl: "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x.jpg",
	inStock: true,
};

// -----------------------------
// Meta
// -----------------------------
const meta: Meta<ProductDetailsCardProps> = {
	title: 'Components/ProductDetailCard',
	component: ProductDetailCard,
	decorators: [
		(Story) => (
			<Suspense fallback={<div>Loading...</div>}>
				<Story />
			</Suspense>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ProductDetailCard>;

// -----------------------------
// Helpers
// -----------------------------
const getStars = (rating: number) =>
	Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

// -----------------------------
// Stories
// -----------------------------

export const Default: Story = {
	args: {
		product: mockProduct,
		handleBackClick: fn(),// () => console.log('Back clicked'),
		handleAddToCart: fn(),// () => console.log('Added to cart'),
		getStars: () => getStars(mockProduct.rating),
	},
};

export const OutOfStock: Story = {
	args: {
		product: { ...mockProduct, inStock: false },
		handleBackClick: fn(),// () => console.log('Back clicked'),
		handleAddToCart: fn(),// () => console.log('Added to cart'),
		getStars: () => getStars(mockProduct.rating),
	},
};

export const LowRating: Story = {
	args: {
		product: { ...mockProduct, rating: 2.2 },
		handleBackClick: fn(),// () => console.log('Back clicked'),
		handleAddToCart: fn(),// () => console.log('Added to cart'),
		getStars: () => getStars(2.2),
	},
};

export const ProductDetailsCard2: Story = {
	args: {
		product: {
			"id": "1",
			"name": "iPhone 15",
			"category": "Electronics",
			"price": 999,
			"rating": 4.5,
			"reviewCount": 120,
			"description": "Latest iPhone model with advanced features.",
			"imageUrl": "https://www.apple.com/newsroom/images/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/article/Apple-iPhone-15-Pro-lineup-color-lineup-230912_big.jpg.large_2x.jpg",
			"inStock": true
		},
		getStars: () => getStars(2.2),
	}
};


export const AddToCartButtonClick: Story = {
	args: {
		product: mockProduct,
		handleBackClick: fn(),
		handleAddToCart: fn(), //console.log("Add to card was click"),
		getStars: () => getStars(mockProduct.rating),
	},
	play: async ({ canvasElement, args }) => {

		const canvas = within(canvasElement);

		await waitFor(async () => {
			// Find the Add to Cart button
			const addToCartButton = await canvas.getByRole('button', {
				name: /add to cart/i,
			});

			// const buttons = await canvas.findAllByRole('button');
			// console.log(buttons);

			// Click it
			await userEvent.click(addToCartButton);

			// Assert it was called
			await expect(args.handleAddToCart).toHaveBeenCalled();

		}, { timeout: 4000 });
	},
};

