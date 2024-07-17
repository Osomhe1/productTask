import { useState } from 'react'
import { url } from '../../utils'
import { useCreateReply } from 'api/hooks/feeds'
import Custombutton from 'components/Custom-button/Custombutton'

const ReplyInput = ({ postId, commentId }) => {
  const { reply, isLoading } = useCreateReply({
    postId,
    commentId,
    onSuccess: (response) => {
      setReplyText('')
    },
    onError: (errorResponse) => {
      console.log({ errorResponse })
    },
  })
  const [replyText, setReplyText] = useState('')

  function handleReply() {
    reply({ text_content: replyText })
  }

  return (
    <div className={`comment-container`}>
      <div className='post-ead'>Reply</div>
      <div className='flex flex-column'>
        <textarea
          name=''
          className='comment-inp'
          id=''
          value={replyText}
          placeholder='Your reply goes here'
          onChange={(e) => {
            setReplyText(e.target.value)
          }}
        ></textarea>
        <div className='com-btn-box'>
          <Custombutton
            className='reply-btn'
            type={'button'}
            onClick={handleReply}
            name={isLoading ? 'Replying' : 'Reply'}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  )
}

export default ReplyInput
