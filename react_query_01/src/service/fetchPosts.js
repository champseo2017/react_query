export const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) {
      throw new Error('ไม่สามารถดึงข้อมูลได้')
    }
    return response.json()
  }