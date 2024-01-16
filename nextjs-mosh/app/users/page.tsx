import Link from 'next/link';
import React from 'react'
import ProductCard from '../components/ProductCard';

const users = () => {
  return (
    <div>
        <h1>Users Page</h1>
        <Link href={'/users/nestedroute'}>Navigate to nested Route</Link>
        <ProductCard/>
    </div>
  )
}

export default users;