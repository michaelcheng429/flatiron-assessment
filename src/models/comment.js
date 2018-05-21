
// create Comment class here

class Comment {
    constructor(commentContent, imageId) {
        // Data for new comment
        this.id = _.uniqueId()
        this.commentContent = commentContent
        this.imageObject = this.findImage(imageId)

        // Add new comment data to "all" property
        Comment.all.push({
            id: this.id,
            commentContent: this.commentContent,
            imageObject: this.imageObject
        });
    }

    findImage(imageId) {
        // Find the matching image object
        const image = _.find(Image.all, item => {
            return item.id === Number(imageId)
        })

        // Add current comment to image's comments property
        image.comments.push(this.commentContent)

        return image;
    }

    commentEl() {
        return `<li id="comment-${this.id}">${this.commentContent}</li>`
    }
}

// Static properties not yet supported in class syntax (would need an additional plugin)
// Returns all the comment objects
Comment.all = []
