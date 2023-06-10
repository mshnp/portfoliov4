import blockContent from './schemas/blockContent'
import post from './schemas/post'
import author from './schemas/author'
import webvideo from './schemas/webvideo'
import video from './schemas/video'
import card from './schemas/card'

export const schema = {
  types: [post, author, webvideo, video, card, blockContent],
}
