import { BiMessageAlt } from 'react-icons/bi'
import ReplyComp from './ReplyComp'
import { useState } from 'react'
import { useRef } from 'react'
import { convertPostTime } from 'utils/helper'
import Likepost from 'components/Home/Likepost/Likepost'
import {
  useGetCommentReplies,
  useGetTotalCommentReactions,
} from 'api/hooks/feeds'
import ReplyInput from './ReplyInput'
import DisplayMedia from 'components/Home/Displaymedia/Displaymedia'

const CommentPerPost = ({ postId, comment }) => {
  const [showReplies, setShowReplies] = useState(false)
  const replyRef = useRef(null)

  const toggleReplies = () => {
    setShowReplies(!showReplies)
    if (!showReplies) {
      window.scrollTo(0, window.scrollY + 80)
    }
  }
  const params = {
    postId,
    commentId: comment?.id,
  }
  const { data } = useGetTotalCommentReactions(params)
  const getReplies = useGetCommentReplies(params)
  const totalReactions = data
    ? Object.values(data?.reactions)?.reduce((acc, cur) => acc + cur)
    : 0

  return (
    <div className='comment_per_Post '>
      <div className='profile-time'>
        <div className='post-profile comment-pro'>
          <img src={comment?.user?.profile_image} alt='' />
          <div className='post-profile-details'>
            <div className='post-profile-name nmm'>
              {comment?.user?.username}
            </div>
            <div className='text-[12px]'>{comment?.user?.occupation}</div>
            <div className='text-[12px]'>
              {comment?.user?.location?.state}{' '}
              {comment?.user?.location?.country}
            </div>
            {/* <div className='autor-ooby nmm'>Software Engineer</div> */}
          </div>
        </div>
        <div className='time-posted nmm'>
          {convertPostTime(comment?.created_at)}
        </div>
      </div>
      <div className='post-body-box !w-full'>
        <div className='comm-body-text btxt'>{comment?.text_content}</div>
        {comment?.file && <DisplayMedia mediaFile={comment?.file} />}
      </div>
      <div className='post-likes-box'>
        <div className='posted-likes-cont'>
          <div className='icon-text'>
            <Likepost postId={postId} isComment commentId={comment?.id} />
            <div className='con-test'>{totalReactions}</div>
          </div>
          <div className='icon-text'>
            <BiMessageAlt className='mess' />
            <div className='con-test'>{totalReactions}</div>
          </div>
        </div>
      </div>
      <ReplyInput postId={postId} commentId={comment?.id} />
      {showReplies ? (
        <div ref={replyRef}>
          <div className='hide-comment-show' onClick={toggleReplies}>
            Hide replies...
          </div>
          {getReplies?.data?.replies?.map((reply) => (
            <ReplyComp reply={reply} postId={postId} commentId={comment?.id} />
          ))}
        </div>
      ) : (
        <div className='hide-comment-show' onClick={toggleReplies}>
          Show replies...
        </div>
      )}
    </div>
  )
}

export default CommentPerPost
