// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {title, description, publishedDate} = eachItem
  return (
    <li className="listed-items">
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div>
        <p className="date">{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
