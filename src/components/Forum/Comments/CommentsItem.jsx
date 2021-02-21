
function CommentsItem({ comment }) {

    return (
        <div>
            <p>{comment.text}</p>
            <p>Created: {comment.timestamp}</p>
        </div>
    );
}

export default CommentsItem;