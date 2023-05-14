import Post from '../interfaces/post'
import url from '../lib/url'
type Props = { post: Post }

const PostCard = ({ post }: Props) => (
  <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
    <img
      alt={post.title}
      src={url(post.image)}
      className="w-full align-middle rounded-t-lg"
    />
    <blockquote className="relative p-8 mb-4">
      {
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block"
          style={{
            height: '95px',
            top: '-94px'
          }}
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-pink-600 fill-current"
          ></polygon>
        </svg>
      }
      <h4 className="text-xl font-bold text-white">{post.title}</h4>
      <p className="text-md font-light mt-2 text-white">{post.excerpt}</p>
    </blockquote>
  </div>
)

export default PostCard
