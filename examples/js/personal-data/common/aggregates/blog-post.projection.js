import { BLOG_POST_CREATED, BLOG_POST_DELETED } from '../blog-post.events'
const projection = {
  Init: () => ({
    isExist: false,
  }),
  [BLOG_POST_CREATED]: (state, { payload: { authorId } }) => ({
    ...state,
    authorId,
    isExist: true,
  }),
  [BLOG_POST_DELETED]: (state) => ({
    ...state,
    isExist: false,
  }),
}
export default projection
