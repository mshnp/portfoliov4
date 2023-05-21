import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import webvideo from './schemas/webvideo'
import video from './schemas/video'

export const schema = {
  types: [post, author, webvideo, video, blockContent],
}
