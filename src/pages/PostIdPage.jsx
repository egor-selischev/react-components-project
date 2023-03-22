import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {useFetching} from "../hooks/useFetching"
import PostService from "../API/PostService"
import Loader from "../components/UI/Loader/Loader"

const PostIdPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const response = await PostService.getCommentsById(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById()
    fetchComments()
  }, [])

  return (
    <div>
      <h1>Вы открыли страницу поста №{params.id}</h1>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h2>
        Комментарии:
      </h2>
      {isLoading
        ? <Loader/>
        : <div>
          {comments.map(comm =>
            <div key={comm.id}>
              <h5>{comm.email}:
                <br/>
                <em style={{fontWeight: 'normal'}}>{comm.body}</em>
              </h5>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default PostIdPage
