import { BiSolidLike, BiMessageAlt } from 'react-icons/bi'
import Comment from './Comment'
import PostMenu from '../Modals/post-menu/PostMenu'
import { useEffect, useState } from 'react'
import PostmediaGrid from './post-media-grid/PostmediaGrid'
import Sharepost from 'components/Home/Sharepost/Sharepost'
import Likepost from 'components/Home/Likepost/Likepost'
import { Link } from 'react-router-dom'
import BlankProfile from 'assets/images/blank-profile-image.png'
import { useGetGoogleLocation, useGetTotalReactions } from 'api/hooks/feeds'
import { convertPostTime } from 'utils/helper'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const PostComp = ({ shared, postData }) => {
  const [localPostData, setLocalPostData] = useState(postData)

  const navigate = useNavigate()
  const { data } = useGetTotalReactions(postData?.id)
  const totalReactions = data
    ? Object.values(data?.reactions)?.reduce((acc, cur) => acc + cur)
    : 0

  const [commentList, setCommentList] = useState([])
  const coordinates = postData?.location?.split(',')
  const getLocation = useGetGoogleLocation({
    latitude: coordinates?.[0],
    longitude: coordinates?.[1],
  })

  // console.log(postData, 'postdata')

  const handleCommentSuccess = () => {
    setLocalPostData((prevLocalPostData) => ({
      ...prevLocalPostData,
      total_comment_count: prevLocalPostData.total_comment_count + 1,
    }))
  }

  // console.log(postData, 'lll')

  return (
    <div className={`postcom`}>
      {shared && (
        <div className='flex items-center justify-between bg-[#4f0da3] py-2 px-4 rounded-t-full'>
          <p className='m-0 text-[#fff]'>
            {postData?.user?.username}{' '}
            <span className='text-[#aa71f4] ml-1'> shared</span>
          </p>
          <span className='text-[#aa71f4]'>
            {convertPostTime(postData?.created_at)}
          </span>
        </div>
      )}
      <div className='post-comp-container'>
        <div className='profile-time'>
          <div
            className='post-profile !cursor-pointer'
            onClick={() => {
              // navigate('/profile')
              navigate(`/${postData?.user?.username}`)
            }}
          >
            {postData?.user && (
              <img src={postData?.user?.profile_image ?? BlankProfile} alt='' />
            )}
            <div className='post-profile-details'>
              {postData?.user && postData?.user?.username && (
                <>
                  <div className='post-profile-name'>
                    {postData?.user?.username}
                  </div>
                  <div className='text-[12px]'>
                    {postData?.user?.occupation}
                  </div>
                  <div className='text-[12px]'>
                    {postData?.user?.location?.state}{' '}
                    {postData?.user?.location?.country}
                  </div>
                </>
              )}

              {/* {creator && creator.address && (
								<div className="autor-location">
									{creator.address.current_city},{creator.address.country}
								</div>
							)} */}
            </div>
          </div>
          {postData && (
            <div className='time-posted'>
              {convertPostTime(postData?.created_at)}
            </div>
          )}
        </div>
        <hr className='feed-hr' />
        <Link to={`/Home/${postData?.id}`} className='post-body-box'>
          {postData?.location !== null && (
            <div className='flex items-center justify-start gap-2 text-[14px]'>
              <MdLocationOn color='red' size={20} />
              {getLocation?.data?.[0]?.formatted_address}
            </div>
          )}

          <div>
            {postData?.text_content && (
              <div className='post-body-text'>
                {postData?.text_content === 'null'
                  ? ''
                  : postData?.text_content}
                <br />
              </div>
            )}
          </div>
        </Link>
        <Link to={`/Home/${postData?.id}`}>
          <div>
            {postData?.files && <PostmediaGrid media={postData?.files} />}
          </div>
        </Link>
        <div className='post-likes-co'>
          <div className='likes-per-post'>
            <div className='likes-bx'>
              <BiSolidLike size={16} className='likes' />
            </div>
            <div className='smil'>🥰</div>
            <div className='smil'>&#x1F60A;</div>
          </div>
          <div className='liker-name-and-total'>
            {/* {totalReactions} */}
            {postData && postData?.user_reactions?.length > 3
              ? `${postData?.reaction[0].user.username} and ${
                  totalReactions - 1
                }`
              : totalReactions}
          </div>
        </div>
        <div className='post-likes-box'>
          <div className='posted-likescont !flex !gap-x-4 !items-center'>
            <div className='icon-text'>
              <Likepost
                size={8}
                postId={postData?.id}
                userReactions={data?.user_reactions}
              />
              <span className='text-[12px]'>{totalReactions}</span>
            </div>
            <div className='icon-text'>
              <BiMessageAlt size={16} color='#000000b9' />
              <span className='text-[12px]'>
                {localPostData?.total_comment_count}
                {/* {postData?.total_comment_count} */}
                {/* {localPostData} */}
              </span>
            </div>

            <div className='icon-text'>
              <Sharepost size={8} postId={postData?.id} postData={postData} />
            </div>
          </div>
          <PostMenu
            postId={postData?.id}
            userId={postData?.user?.id}
            postData={postData}
          />
        </div>
        {postData?.tagged_users?.length > 0 && (
          <div className='flex !mt-[10px] items-center'>
            <span className='!text-[12px]'>Tag: </span>
            <div className='tagged-users-container cursor-pointer flex gap-2 flex-wrap !p-[10px] '>
              {postData?.tagged_users?.map((tag_user) => (
                <div
                  className='tagged-user flex items-center !text-[14px] '
                  key={tag_user?.id}
                >
                  <span className='tagged-username !mr-[5px] !text-[#0073b1] '>
                    @{tag_user?.username}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Comment
        setCommentList={setCommentList}
        commentList={commentList}
        postID={postData?.id}
        onCommentSuccess={handleCommentSuccess}
      />
    </div>
  )
}

export default PostComp
