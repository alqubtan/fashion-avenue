import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

import {CategoryPreviewContainer, CategoryPreviewTitle, CategoryPreviewPreview} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <CategoryPreviewTitle>
      <Link to={title} className="title">
        {title.toUpperCase()}
      </Link>
    </CategoryPreviewTitle>
    <CategoryPreviewPreview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoryPreviewPreview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
