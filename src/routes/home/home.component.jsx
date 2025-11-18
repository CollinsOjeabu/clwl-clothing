/**
 * LESSON: Data Flow & Component Composition (Props)
 * 
 * Key Concepts:
 * 1. Data at Route Level: Keep data specific to a route at the route level
 * 2. Props Down: Pass data as props to child components
 * 3. Separation of Concerns: Home manages data, Directory displays it
 * 4. Hard-coded vs API: This data is hard-coded, but should come from Firebase/API
 * 
 * Future: Replace with useEffect to fetch from Firebase
 */

import Directory from '../../components/directory/directory.component';

const Home = () => {

  // TODO: Move this to Firebase and use useEffect to fetch
  const categories = [
  {
    "id": 1,
    "title": "hats",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
];


  return (
    <Directory categories={categories} />
  );
}

export default Home;