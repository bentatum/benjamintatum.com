
export default path => {
  const posts = []

  let post
  let i = 0

  while (i > -1) {
    try {
      post = require(`${path}${i}.md`)
      i++
    } catch (err) {
      i = -1
      break
    }
    posts.push(post)
  }

  return posts
}
