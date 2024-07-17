import { useGetReplyReactions } from 'api/hooks/feeds'
import Likepost from 'components/Home/Likepost/Likepost'
import { convertPostTime } from 'utils/helper'

const ReplyComp = ({ reply, postId, commentId }) => {
  const params = {
    postId,
    commentId,
    replyId: reply?.id,
  }
  const { data } = useGetReplyReactions(params)
  const totalReactions = data
    ? Object.values(data?.reactions)?.reduce((acc, cur) => acc + cur)
    : 0
  return (
    <div className='reply-container'>
      {' '}
      <div className='profile-time'>
        <div className='post-profile comment-pro'>
          <img src={reply?.user?.profile_image} alt='' />
          <div className='post-profile-details'>
            <div className='post-profile-name nmm'>{reply?.user?.username}</div>
            {/* <div className="autor-ooby nmm">Software Engineer</div> */}
          </div>
        </div>
        <div className='time-posted nmm'>
          {convertPostTime(reply?.created_at)}
        </div>
      </div>
      <div className='post-body-box'>
        <div className='comm-body-text btxt'>{reply?.text_content}</div>
      </div>
      <div className='post-likes-box'>
        <div className='posted-likes-cont'>
          <div className='icon-text'>
            <Likepost
              postId={postId}
              isReply
              commentId={commentId}
              replyId={reply?.id}
            />
            <div className='con-test'>{totalReactions}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReplyComp
