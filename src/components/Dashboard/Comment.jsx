import { useState } from 'react'
import { url } from '../../utils'
import { useCreateComment } from 'api/hooks/feeds'
import Custombutton from 'components/Custom-button/Custombutton'

const Comment = ({ postID, onCommentSuccess }) => {
  // const [postComment, setPostComment] = useState()
  const { comment, isLoading } = useCreateComment({
    postId: postID,
    onSuccess: (response) => {
      // console.log({ response })
      // setPostComment(response?.data?.comment?.text_content)
      onCommentSuccess()
      setCommentText('')
    },
    onError: (errorResponse) => {
      console.log({ errorResponse })
    },
  })

  const [commentText, setCommentText] = useState('')

  function handleComment() {
    let commentData = new FormData()
    commentData.append('text_content', commentText)
    comment(commentData)
  }

  return (
    <div className={`comment-container`}>
      <div className='post-ead'>Comment</div>
      <div className='inp-coment lg:!gap-x-24'>
        <textarea
          name=''
          className='comment-inp'
          id=''
          value={commentText}
          placeholder='Your comment goes here'
          onChange={(e) => {
            setCommentText(e.target.value)
          }}
        ></textarea>
        <div className='com-btn-box !mr-8'>
          <Custombutton
            className='com-btn'
            type='submit'
            onClick={handleComment}
            name={isLoading ? 'Posting' : 'Post'}
            disabled={isLoading}
          />
        </div>
      </div>
      {/* <div className='post-ead'>{postComment}</div> */}
    </div>
  )
}

export default Comment
