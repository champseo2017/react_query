import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// สร้าง QueryCache สำหรับจัดการการแคชข้อมูล
const queryCache = new QueryCache({
  // ทำงานเมื่อเกิดข้อผิดพลาดในการดึงข้อมูล
  onError: (error) => {
    console.error('เกิดข้อผิดพลาด:', error)
  },
  // ทำงานเมื่อดึงข้อมูลสำเร็จ
  onSuccess: (data) => {
    console.log('ดึงข้อมูลสำเร็จ:', data)
  }
})

// สร้าง QueryClient พร้อมกำหนด queryCache
const queryClient = new QueryClient({
  queryCache: queryCache,
  defaultOptions: {
    queries: {
      // ตั้งค่าพื้นฐานสำหรับการดึงข้อมูลทั้งหมด
      retry: 2, // จำนวนครั้งที่จะลองใหม่เมื่อเกิดข้อผิดพลาด
      staleTime: 1000 * 60 * 5, // ข้อมูลจะเก่าหลังจาก 5 นาที
      cacheTime: 1000 * 60 * 30 // เก็บข้อมูลในแคช 30 นาที
    }
  }
})

// สร้าง Root Element และ Render แอพพลิเคชัน
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
)
