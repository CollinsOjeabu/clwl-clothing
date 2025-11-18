/**
 * LESSON: Destructuring & Inline Styles
 * 
 * Key Concepts:
 * 1. Destructuring Props: Extract 'category', then extract 'imageUrl' and 'title'
 * 2. Nested Destructuring: Saves code and improves readability
 * 3. Inline Styles: Dynamic background image using style prop
 * 4. Template Literals: `url(${imageUrl})` inserts image URL dynamically
 * 5. Presentational Component: Only displays data, doesn't manage state
 */

import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
  return (
    <div className="category-container">
          <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
  )
}

export default CategoryItem;
