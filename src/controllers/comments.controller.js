class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
  }

  init() {
    this.addCommentFormListener()
  }

  addCommentFormListener() {
    _.each(this.$addCommentForm, form => {
        $(form).submit(event => {
            event.preventDefault()

            // Grab imageId
            const imageId = event.target.getAttribute('data-id')

            // Grab commentContent
            const commentEl = $(`#comment-description-${imageId}`)
            const commentContent = commentEl.val()

            // Clear input
            commentEl.val('')

            // Create new Comment (newComment is added to Comment's "all" property)
            // Question: "execute the render function on that found image object to append the new comment"?
            // Not sure what this exactly means. The README says to pass the commentObject, not the found image object
            // I am using the found image object, but was there another way I was supposed to use it?
            const newComment = new Comment(commentContent, imageId)

            // Render/append the new comment
            this.render(newComment)
        })
    })
  }

  render(commentObject) {
    const { imageObject, commentContent } = commentObject

    // Use the found image object to select the appropriate "ul" to append the comment to
    $(`#comments-${imageObject.id}`).append(commentObject.commentEl())
  }
}
