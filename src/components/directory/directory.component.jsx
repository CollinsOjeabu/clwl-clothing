/**
 * LESSON: Array Mapping & Reusable Components
 * 
 * Key Concepts:
 * 1. Destructuring Props: Extract 'categories' from props
 * 2. Array.map(): Transform array into JSX elements
 * 3. Key Prop: Unique 'key' prop helps React identify changed items (use ID, NOT index!)
 * 4. Component Reusability: CategoryItem rendered multiple times with different data
 */

import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
      {categories.map((category ) => (
        <CategoryItem key={category.id} category = {category}/>
      ))}
    </div>
  )
}

export default Directory;