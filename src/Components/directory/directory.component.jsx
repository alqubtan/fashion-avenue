import "./directory.styles.scss";
import CategoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));
};

export default Directory;