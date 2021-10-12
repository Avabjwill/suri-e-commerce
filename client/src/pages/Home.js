// // Node Modules
// import React from 'react';
// import "./HomePage.css";
// import { useQuery } from '@apollo/client';
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // Utilities
// import Auth from '../utils/auth';
// import { QUERY_USERS } from '../utils/queries';
// // Components
// import UserList from '../components/UserList';
// import Product from "../components/Product";
// import { getProducts, getProducts as listProducts } from "../redux/actions/productActions";


// const Home = () => {
//   const { loading, data, error } = useQuery(QUERY_USERS);
//   const product = useSelector(state => state.products || [])
// console.log('products', products);
//   const users = data?.users || [];

//   const renderUserList = () => {
//     if (loading) {
//       return <h2>Loading...</h2>
//     } else {
//       return <UserList users={users} title="List of Users" />
//     }
//   } 

//   const renderUsername = () => {
//     if (!Auth.loggedIn()) return null;
//     return Auth.getProfile().data.username;
//   }
//   const dispatch = useDispatch();

//   const getProducts = useSelector((state) => state.getProducts);
//   const { products } = getProducts;

//   useEffect(() => {
//     dispatch(listProducts());
//     console.log('LOAD PRODUCTS');
//     console.log(getProducts);
//     getProducts();
//   }, []);

//   useEffect(() => {
//     console.log(products);
//   }, []);

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div
//           className="col-12 col-md-10 mb-3 p-3"
//           style={{ border: '1px dotted #1a1a1a' }}
//         >
//           {renderUsername()}
//         </div>
//         <div className="col-12 col-md-8 mb-3">
//           {renderUserList()}
//           <div className="homescreen">
//       <h2 className="homescreen_title">Latest Products</h2>
//       <div className="homescreen_products">
//         {loading ? (
//           <h2>Loading...</h2>
//         ) : error ? (
//           <h2>{error}</h2>
//         ) : (
//           products.map((product) => (
//             <Product
//               key={product._id}
//               name={product.name}
//               description={product.description}
//               price={product.price}
//               imageUrl={product.imageUrl}
//               productId={product._id}
//             />
//           ))
//         )}
//       </div>
//     </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

import "./HomePage.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
