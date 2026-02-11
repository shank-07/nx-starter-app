import { FC } from 'react';
import styles from './product-detail.module.css';

/* -------------------- */
/* Product Type         */
/* -------------------- */
export interface Product {
	id: string;
	name: string;
	category: string;
	price: number;
	rating: number;
	reviewCount: number;
	description: string;
	imageUrl: string;
	inStock: boolean;
}

/* -------------------- */
/* Props Type           */
/* -------------------- */
export interface ProductDetailsCardProps {
	handleBackClick: () => void;
	handleAddToCart: () => void;
	getStars: () => boolean[];
	product: Product;
	// styles: Record<string, string>;
}

/* -------------------- */
/* Component            */
/* -------------------- */
export const ProductDetailsCard: FC<ProductDetailsCardProps> = ({
	handleBackClick,
	product,
	getStars,
	handleAddToCart,
}) => {
	return (
		<div className={styles['product-detail-container']}>
			<button className={styles['back-button']} onClick={handleBackClick}>
				← Back to Products
			</button>

			<div className={styles['product-detail']}>
				<div className={styles['product-image']}>
					<img src={product.imageUrl} alt={product.name} />
					{!product.inStock && (
						<div className={styles['out-of-stock-overlay']}>
							Out of Stock
						</div>
					)}
				</div>

				<div className={styles['product-info']}>
					<div className={styles['product-category']}>
						{product.category}
					</div>

					<h1 className={styles['product-name']}>{product.name}</h1>

					<div className={styles['product-rating']}>
						<span className={styles['stars']}>
							{getStars().map((filled: boolean, index: number) => (
								<span
									key={index}
									className={filled ? styles['filled'] : ''}
								>
									★
								</span>
							))}
						</span>

						<span className={styles['review-count']}>
							({product.reviewCount} reviews)
						</span>
					</div>

					<div className={styles['product-price']}>
						${product.price.toFixed(2)}
					</div>

					<div className={styles['product-availability']}>
						{product.inStock ? (
							<span className={styles['in-stock']}>✓ In Stock</span>
						) : (
							<span className={styles['out-of-stock']}>
								Out of Stock
							</span>
						)}
					</div>

					<div className={styles['product-description']}>
						<h2>Description</h2>
						<p>{product.description}</p>
					</div>

					<div className={styles['product-actions']}>
						<button
							className={styles['add-to-cart-btn']}
							onClick={handleAddToCart}
							disabled={!product.inStock}
						>
							{product.inStock ? 'Add to Cart' : 'Out of Stock'}
						</button>
					</div>

					<div className={styles['product-details']}>
						<h3>Product Details</h3>
						<ul>
							<li>
								<strong>Product ID:</strong> {product.id}
							</li>
							<li>
								<strong>Category:</strong> {product.category}
							</li>
							<li>
								<strong>Rating:</strong> {product.rating.toFixed(1)} out of 5
							</li>
							<li>
								<strong>Reviews:</strong> {product.reviewCount} customer reviews
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
