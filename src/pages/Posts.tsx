import { Post } from "./Main"

interface Props {
    post: Post
  }

const Posts = (props: Props) => {
    const {post} = props;
  return (
    <div>
        <h1>{post.title}</h1>
        <h2>{post.description}</h2>
        <h3>@{post.username}</h3>
        <p>userId: {post.userId}</p>
        {/* <p>{post.id}</p> */}
    </div>
  )
}

export default Posts