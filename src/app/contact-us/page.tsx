import React, { Suspense } from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <h1>Welcome to the Contact us page</h1>
      </Suspense>
    </div>
  );
};

export default HomePage;
