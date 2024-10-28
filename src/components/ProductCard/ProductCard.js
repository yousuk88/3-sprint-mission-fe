import React from 'react';
import styles from './ProductCard.module.css';
import likeIcon from '../../assets/images/like-icon.png';
import placeholderImage from '../../assets/images/placeholder.png';

const ProductCard = ({ product, size }) => {
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(product.price);

  const handleImageError = (e) => {
    e.target.src = placeholderImage; // 이미지 로드 실패 시 대체 이미지 설정
  };

  return (
    <div className={`${styles.card} ${styles[size]}`}>
      <img src={product.images || placeholderImage} alt={product.name} className={styles.image} onError={handleImageError} />
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>{formattedPrice}원</p>
        <div className={styles.likes}>
          <img src={likeIcon} alt="like" className={styles.likeIcon} />
          <span>{product.favoriteCount}</span>
        </div>
      </div>
    </div >
  );
};

export default ProductCard;