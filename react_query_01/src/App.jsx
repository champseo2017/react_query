
import { useQuery } from '@tanstack/react-query'
import './App.css'
import { fetchPosts } from './service'

const App = () => {

   // ใช้ useQuery ในการดึงข้อมูล
   const {
    data: posts,         // ข้อมูลโพสต์
    error,              // ข้อผิดพลาด (ถ้ามี)
    status,             // สถานะการดึงข้อมูล
    isLoading,          // กำลังโหลดหรือไม่
    isError            // มีข้อผิดพลาดหรือไม่
  } = useQuery({
    queryKey: ['posts'],  // key สำหรับแคชข้อมูล
    queryFn: fetchPosts   // ฟังก์ชันที่ใช้ดึงข้อมูล
  })

  console.log("posts", posts);
  console.log("isLoading", isLoading);
  
  
  
  return (
    <>
      
    </>
  )
}

export default App
