import React from 'react'
import PostItem from "./PostItem"
import {CSSTransition, TransitionGroup} from "react-transition-group"

const PostList = ({remove, posts, title}) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>
        {title}
      </h1>
      <TransitionGroup>
        {posts.length
          ? posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem remove={remove} post={post} />
            </CSSTransition>
          )
          : <h2 style={{textAlign: 'center', marginTop: '15px'}}>
            Посты не найдены!
          </h2>
        }
      </TransitionGroup>
    </div>
  )
}

export default PostList
