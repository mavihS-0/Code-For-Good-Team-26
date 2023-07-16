import React from 'react'
import Login from '@/components/Login'
import Layout from '@/components/Layout'

const login = () => {
  return (
    <Layout>
      <header className="py-10 bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Welcome, User
          </h1>
        </div>
      </header>
      <main>
      <Login />

      </main>
    </Layout>
    
  )
}

export default login

