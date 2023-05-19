import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import webvideo from './schemas/webvideo'
import newVideo from './schemas/newVideo'

export const schema = {
  types: [post, author, webvideo, newVideo, blockContent],
}
