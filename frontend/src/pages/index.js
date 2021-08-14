import React from 'react';
import View1 from '../Home/View1/View1';
const Home = () => {
  return (
    <>
    <View1 />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Home</h1>
    </div>
    </>
  );
};

export default Home;