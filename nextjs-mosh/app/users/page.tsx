'use client'
import Link from 'next/link';
import React from 'react'

const users = () => {
  return (
    <div>
        <h1>Users Page</h1>
        <Link href={'/users/nestedroute'}>Navigate to nested Route</Link>
    </div>
  )
}

export default users;