import { useSelector, useDispatch } from 'react-redux';
import CommentsItem from './CommentsItem';
import { useEffect } from 'react';

function ForumPostItem() {

    const currentPost = useSelector(store => store.CurrentCategoryReducer);
    console.log(currentPost);
    const comments = useSelector(store => store.CurrentCategoryReducer);
    console.log(comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_COMMENTS', payload: currentPost });
    }, [])

    return (
        <div>
            {comments.map(comment =>
                (<CommentsItem comment={comment} key={comment.id} />)
            )}
        </div>
    );
}

export default ForumPostItem;