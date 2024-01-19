import Link from 'next/link';
import React from 'react'
import ProductCard from '../components/ProductCard';

interface User {
  id: number;
  name: string;
}

const users = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users: User[] = await res.json();
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {(users && users.map((x) => { return (<li key={x.id}>{x.name}</li>); }))}
      </ul>
      <Link href={'/users/nestedroute'}>Navigate to nested Route</Link>
      <ProductCard />
    </div>
  )
}

export default users;