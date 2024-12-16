'use client'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/authenticated/Navbar'

export default function DashboardPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token')
    
    if (!token) {
      // No token, redirect to login
      navigate('/login')
      return;
    }
  })

  return (
      <div>
        <Navbar />
      </div>
  )
}

