// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="unOrderlist">
      {blogsList.map(eachList => (
        <BlogItem eachItem={eachList} key={eachList.id} />
      ))}
    </ul>
  )
}

export default BlogList
