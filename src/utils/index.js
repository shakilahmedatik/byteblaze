import toast from 'react-hot-toast'

export const getBlogs = () => {
  let blogs = []
  const storedBlogs = localStorage.getItem('blogs')
  if (storedBlogs) {
    blogs = JSON.parse(storedBlogs)
  }
  return blogs
}
export const saveBlog = blog => {
  let blogs = getBlogs()
  const isExist = blogs.find(b => b.id === blog.id)
  if (isExist) {
    return toast.error('Already Bookmarked!')
  }
  blogs.push(blog)
  localStorage.setItem('blogs', JSON.stringify(blogs))
  toast.success('Blog Bookmarked Successfully!')
}

export const deleteBlog = id => {
  let blogs = getBlogs()
  const remaining = blogs.filter(b => b.id !== id)
  localStorage.setItem('blogs', JSON.stringify(remaining))
  toast.success('Blog Removed from Bookmark!')
}
