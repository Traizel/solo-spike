import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';

function ForumPostItem({ post }) {

    const users = useSelector(store => store.GetUsersReducer)
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
        dispatch({ type: 'SET_CURRENT_POST', payload: post.id })
    }, [])

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Created: {post.timestamp}</p>
            <h2>Comments</h2>
            <Comments />
        </div>
    );
}

export default ForumPostItem;