import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Comments from '../Comments/Comments';

function Post() {

    const users = useSelector(store => store.GetUsersReducer)
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    return (
        <div>
            <h1>TraizelCraft Forums</h1>
            <Comments />
        </div>
    );
}

export default Post;