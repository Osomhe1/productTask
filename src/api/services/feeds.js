/*******************************************************************************
 * Api services are detailed below in the order: Post, Put/Patch, Get, Delete
 *******************************************************************************/
import { useMutation, useQuery } from '@tanstack/react-query'
import _2gedaservice, { setupAxios } from '..'

const { post, get } = _2gedaservice

const config = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
}

/**POST HTTP REQUESTS*/
export const createFeedsPost = async (postData) => {
  setupAxios()
  const response = post(`/feeds/post/`, postData)
  return (await response).data
}

export const createPostFile = async (postId, postFileData) => {
  setupAxios()
  const response = post(`/feeds/post/${postId}/file/`, postFileData, config)
  return (await response).data
}

export const createComment = async (postId, commentData) => {
  setupAxios()
  const response = post(`/feeds/post/${postId}/comments/`, commentData, config)
  return (await response).data
}

export const createReply = async (postId, commentId, replyData) => {
  setupAxios()
  const response = post(
    `/feeds/post/${postId}/comments/${commentId}/replies/`,
    replyData
  )
  return (await response).data
}

export const feedsRepost = async (postId, postData) => {
  setupAxios()
  const response = post(`/feeds/post/${postId}/repost/`, postData)
  return (await response).data
}

export const savePost = async (postId) => {
  setupAxios()
  const response = post(`/feeds/post/${postId}/save/`)
  return (await response).data
}

export const promotePost = async (promoteData) => {
  setupAxios()
  const response = post(`/feeds/post/promote/`, promoteData)
  return (await response).data
}

export const reportPost = async (reportData) => {
  setupAxios()
  const response = post(`/feeds/post/report/`, reportData)
  return (await response).data
}

export const createReaction = async (postId, reactionData) => {
  setupAxios()
  const response = post(`/feeds/post/${postId}/reactions/`, reactionData)
  return (await response).data
}

export const createCommentReaction = async (
  postId,
  commentId,
  reactionData
) => {
  setupAxios()
  const response = post(
    `/feeds/post/${postId}/comments/${commentId}/reactions/`,
    reactionData
  )
  return (await response).data
}

export const createReplyReaction = async (
  postId,
  commentId,
  replyId,
  reactionData
) => {
  setupAxios()
  const response = post(
    `/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`,
    reactionData
  )
  return (await response).data
}

export const createStatus = async (statusData) => {
  setupAxios()
  const response = post(`/feeds/status/`, statusData)
  return (await response).data
}

export const blockUser = async (data) => {
  setupAxios()
  const response = post(`/user/account/block_user/`, data)
  return (await response).data
}
export const deletePost = async (id) => {
  setupAxios()
  const response = _2gedaservice.delete(`/feeds/post/${id}/`)
  console.log(response, 'deletePost')
  return (await response).data
}

// export const deletePost = async (postId) => {
//   setupAxios()
//   console.log(postId, 'deletePost')
//   const response = await axios.delete(`/api/posts/${postId}`)
//   console.log(response, 'rrrrrr')
//   return response?.data
// }

/**PUT/PATCH HTTP REQUESTS*/
//none here at the moment

/**GET HTTP REQUESTS*/

export const getAllFeedsPost = async (page = 1, limit = 20) => {
  setupAxios()
  // const response = get(`/feeds/post/`)
  const response = await get(`/feeds/post/?page=${page}&limit=${limit}`)
  console.log(response, 'response')
  const data = response.data?.results?.posts
  // const data = response.data?.pages
  //   ?.map((page) => (page ? page.results : undefined))
  //   .flat()

  return data
}

export const useGetAllFeedsPost = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_all'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/`)
      return res?.data
    },
  })
}

export const getPostById = async (id) => {
  setupAxios()
  const response = get(`/feeds/post/${id}`)
  return (await response).data
}

export const getTotalReactions = async (postId) => {
  setupAxios()
  const response = get(`/feeds/post/${postId}/reactions/`)
  return (await response).data
}

export const getTotalCommentReactions = async (postId, commentId) => {
  setupAxios()
  const response = get(`/feeds/post/${postId}/comments/${commentId}/reactions/`)
  return (await response).data
}

export const getReplyReactions = async (postId, commentId, replyId) => {
  setupAxios()
  const response = get(
    `/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`
  )
  return (await response).data
}

export const getComments = async (postId) => {
  setupAxios()
  const response = get(`/feeds/post/${postId}/comments/`)
  return (await response).data
}

export const getCommentReplies = async (postId, commentId) => {
  setupAxios()
  const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`)
  return (await response).data
}

export const getGoogleLocation = async (latitude, longitude) => {
  const response = fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=false&key=AIzaSyBFU5z4QfEvabpt01y8UvzUBJBCJt0nxg0`
  ).then((res) => res.json())
  return await response
}

export const getAllUsers = async () => {
  setupAxios()
  const response = get(`/account/profiles/`)
  return (await response).data
}

export const getAllStereoFiles = async (postId, commentId) => {
  setupAxios()
  const response = get(`/feeds/post/${postId}/comments/${commentId}/replies/`)
  return (await response).data
}

// create job
export const useCreateJob = () => {
  return useMutation({
    mutationFn: (data) => {
      return _2gedaservice.post(`/feeds/post/`, data)
    },
  })
}

export const useRealAllNotification = () => {
  return useMutation({
    mutationFn: (data) => {
      return _2gedaservice.post(`/notifications/mark-as-read/`, data)
    },
  })
}
export const useFetchLifeStyle = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_lifestyle'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/status/`)
      return res?.data?.data?.status
    },
  })
}

export const useFetchUnreadNotification = () => {
  setupAxios()
  return useQuery({
    queryKey: ['unread_notifications'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/notifications/unread/`)
      return res?.data?.data
    },
  })
}

export const useUserFetchLifeStyle = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_user_lifestyle'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/user/status/`)
      return res?.data?.data?.status
    },
  })
}

export const useFetchSingleLifeStyle = (id) => {
  setupAxios()
  return useQuery({
    queryKey: ['get_Singlelifestyle'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/status/${id}`)
      console.log(res, 'get_Singlelifestyle')
      return res?.data?.data?.status
    },
  })
}

export const useFetchSearch = (query) => {
  setupAxios()
  return useQuery({
    queryKey: ['get_search', query],
    queryFn: async () => {
      if (query) {
        const res = await _2gedaservice.get(`/search/?q=${query}`)
        return res.data.data
      }
      return { posts: [], users: [], jobs: [], businesses: [] }
    },
    enabled: !!query, // only run query if there's a search query
  })
}

export const useFetchImages = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_images'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=image`)
      return res?.data?.data?.post
    },
  })
}
export const useFetchVideo = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_video'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=video`)
      return res?.data?.data?.post
    },
  })
}
export const useFetchProduct = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_product'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=product`)
      return res?.data?.data?.post
    },
  })
}
export const useFetchVoiceNote = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_voicenote'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=voice_note`)
      return res?.data?.data?.post
    },
  })
}

export const useFetchLocation = () => {
  setupAxios()
  return useQuery({
    queryKey: ['location'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=location`)
      return res?.data?.data?.post
    },
  })
}
export const useFetchMusic = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_music'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=music`)
      return res?.data?.data?.post
    },
  })
}

export const useFetchJobs = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_jobs'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/job/post`)
      console.log(res, 'job')
      return res?.data?.data?.job_posts
    },
  })
}

export const useFetchFiles = () => {
  setupAxios()
  return useQuery({
    queryKey: ['get_files'],
    queryFn: async () => {
      const res = await _2gedaservice.get(`/feeds/post/?filter=file`)
      return res?.data?.data?.post
    },
  })
}

/**DELETE HTTP REQUESTS*/
//none here at the moment

export const removeReaction = async (postId, reactionData) => {
  console.log(reactionData)
  setupAxios()
  const response = _2gedaservice.delete(
    `/feeds/post/${postId}/reactions/`,
    reactionData
  )
  return (await response).data
}

export const removeCommentReaction = async (
  postId,
  commentId,
  reactionData
) => {
  setupAxios()
  const response = _2gedaservice.delete(
    `/feeds/post/${postId}/comments/${commentId}/reactions/`,
    reactionData
  )
  return (await response).data
}

export const removeReplyReaction = async (
  postId,
  commentId,
  replyId,
  reactionData
) => {
  setupAxios()
  const response = _2gedaservice.delete(
    `/feeds/post/${postId}/comments/${commentId}/replies/${replyId}/reactions/`,
    reactionData
  )
  return (await response).data
}

export const usePostLifeStyle = () => {
  setupAxios()
  return useMutation({
    mutationFn: (data) => {
      return _2gedaservice.post(`/feeds/user/status/`, data)
    },
  })
}
