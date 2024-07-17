/***********************************************************************
 * Hooks are detailed below in the order: create, update, fetch, delete
 *************************************************************************/
import {
  useMutation,
  useQuery,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query'
import {
  blockUser,
  createComment,
  createCommentReaction,
  createFeedsPost,
  createPostFile,
  createReaction,
  createReply,
  createReplyReaction,
  createStatus,
  feedsRepost,
  getAllFeedsPost,
  getAllUsers,
  getCommentReplies,
  getComments,
  getGoogleLocation,
  getPostById,
  getReplyReactions,
  getTotalCommentReactions,
  getTotalReactions,
  promotePost,
  removeCommentReaction,
  removeReaction,
  removeReplyReaction,
  reportPost,
  savePost,
  deletePost,
} from 'api/services/feeds'

//Each of these keys handles the refetching of data at given instances of users actions
const feedsKey = 'feed'
const commentKey = 'comment'
const replyKey = 'reply'
const reactionKey = 'reaction'
const c_reactionKey = 'comment-reaction' //comment reaction key
const r_reactionKey = 'reply-reaction' //reply reaction key

/**CREATE FEEDS DATA HOOKS */

export const useCreateFeedsPost = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (postData) => createFeedsPost(postData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [feedsKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    createPost: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useCreatePostFile = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (postId) => createPostFile(postId, options.postFileData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [feedsKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    postFile: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useCreateComment = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (commentData) => createComment(options.postId, commentData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [commentKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    comment: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useCreateReply = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (replyData) =>
      createReply(options.postId, options.commentId, replyData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [replyKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    reply: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useFeedsRepost = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (postData) => feedsRepost(options.postId, postData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [feedsKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    repost: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useSavePost = (options) => {
  const mutation = useMutation({
    mutationFn: (postId) => savePost(postId),
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    savePost: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const usePromotePost = (options) => {
  const mutation = useMutation({
    mutationFn: (promoteData) => promotePost(promoteData),
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    promote: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useReportPost = (options) => {
  const mutation = useMutation({
    mutationFn: (reportData) => reportPost(reportData),
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    report: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useBlockUser = (options) => {
  const mutation = useMutation({
    mutationFn: (data) => blockUser(data),
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    block: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useDeletePost = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (data) => deletePost(data),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [feedsKey] })
      //   options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      //   query.invalidateQueries({ queryKey: [feedsKey] })
      options.onError && options.onError(error)
    },
  })

  return {
    block: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

/**CREATE FEEDS REACTION HOOKS */

export const useCreateReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) => createReaction(options.postId, reactionData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    reaction: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useCreateCommentReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) =>
      createCommentReaction(options.postId, options.commentId, reactionData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [c_reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    reaction: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useCreateReplyReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) =>
      createReplyReaction(
        options.postId,
        options.commentId,
        options.replyId,
        reactionData
      ),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [r_reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    reaction: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

/**CREATE FEEDS STATUS HOOKS */

export const useCreateStatus = (options) => {
  const mutation = useMutation({
    mutationFn: (statusData) => createStatus(statusData),
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    create: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

/**UPDATE FEEDS DATA HOOKS */
//none here at the moment

/**FETCH FEEDS DATA HOOKS */

// export const useGetAllFeeds = (isAuth) => {
//   const response = useInfiniteQuery({
//     queryKey: [feedsKey],
//     // queryFn: () => getAllFeedsPost(),
//     // new
//     queryFn: ({ pageParam = 1 }) => getAllFeedsPost(pageParam),
//     enabled: isAuth,
//     getNextPageParam: (lastPage, pages) => {
//       if (lastPage?.length === 0) return undefined
//       return pages.length + 1
//     },
//   })

//   return {
//     isError: response.isError,
//     isLoading: response.isLoading,
//     isSuccess: response.isSuccess,
//     data: response.data ? response.data?.data : undefined,
//   }
// }

export const useGetAllFeeds = (isAuth) => {
  return useInfiniteQuery({
    queryKey: [feedsKey],
    queryFn: ({ pageParam = 1 }) => getAllFeedsPost(pageParam),
    enabled: isAuth,
    cancelRefetch: false,
    getNextPageParam: (lastPage, pages) => {
      if (lastPage?.length === 0) return undefined
      return pages.length + 1
    },
  })
}

// export const useGetAllFeeds = (isAuth) => {
//   const response = useQuery({
//     queryKey: [feedsKey],
//     queryFn: () => getAllFeedsPost(),
//     enabled: isAuth,
//   })

//   return {
//     isError: response.isError,
//     isLoading: response.isLoading,
//     isSuccess: response.isSuccess,
//     data: response.data ? response.data?.data : undefined,
//   }
// }

export const useGetPostById = (postId) => {
  const response = useQuery({
    queryKey: [feedsKey, postId],
    queryFn: () => getPostById(postId),
    enabled: postId !== undefined,
  })

  return {
    isSuccess: response.isSuccess,
    isError: response.isError,
    isLoading: response.isLoading,
    data: response.data ? response.data?.data?.post : undefined,
  }
}

export const useGetComments = (postId) => {
  const response = useQuery({
    queryKey: [commentKey, postId],
    queryFn: () => getComments(postId),
    enabled: postId !== undefined,
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useGetCommentReplies = (params) => {
  const response = useQuery({
    queryKey: [replyKey, params?.postId, params?.commentId],
    queryFn: () => getCommentReplies(params?.postId, params?.commentId),
    enabled: params?.postId !== undefined,
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useGetTotalReactions = (postId) => {
  const response = useQuery({
    queryKey: [reactionKey, postId],
    queryFn: () => getTotalReactions(postId),
    enabled: postId != undefined,
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useGetTotalCommentReactions = (params) => {
  const response = useQuery({
    queryKey: [c_reactionKey, params?.postId, params?.commentId],
    queryFn: () => getTotalCommentReactions(params?.postId, params?.commentId),
    enabled: params?.commentId !== undefined,
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useGetReplyReactions = (params) => {
  const response = useQuery({
    queryKey: [
      r_reactionKey,
      params?.postId,
      params?.commentId,
      params?.replyId,
    ],
    queryFn: () =>
      getReplyReactions(params?.postId, params?.commentId, params?.replyId),
    enabled: params?.commentId !== undefined,
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useGetGoogleLocation = (options) => {
  const response = useQuery({
    queryKey: ['googleLocation', options?.latitude, options?.longitude],
    queryFn: () => getGoogleLocation(options?.latitude, options?.longitude),
    enabled:
      options?.latitude !== undefined && options?.longitude !== undefined,
    onSuccess: (data) => {
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.results : undefined,
  }
}

export const useGetAllUsers = () => {
  const response = useQuery({
    queryKey: ['tag-users'],
    queryFn: () => getAllUsers(),
  })

  return {
    isError: response.isError,
    isLoading: response.isLoading,
    isSuccess: response.isSuccess,
    data: response.data ? response.data?.data : undefined,
  }
}

export const useUser = () => {
  const userInfo = JSON.parse(localStorage.getItem('2gedaUserInfo'))

  return {
    user: userInfo?.user,
  }
}

/**DELETE FEEDS DATA HOOKS */
//none here at the moment

export const useRemoveReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) => removeReaction(options?.postId, reactionData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    delete: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useRemoveCommentReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) =>
      removeCommentReaction(options?.postId, options.commentId, reactionData),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [c_reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    delete: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}

export const useRemoveReplyReaction = (options) => {
  const query = useQueryClient()
  const mutation = useMutation({
    mutationFn: (reactionData) =>
      removeReplyReaction(
        options.postId,
        options.commentId,
        options.replyId,
        reactionData
      ),
    onSuccess: (data) => {
      query.invalidateQueries({ queryKey: [r_reactionKey] })
      options.onSuccess && options.onSuccess(data)
    },
    onError: (error) => {
      options.onError && options.onError(error)
    },
  })

  return {
    delete: mutation.mutate,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    isLoading: mutation.isPending,
  }
}
