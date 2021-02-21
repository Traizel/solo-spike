import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function ForumThreadsItem({ thread }) {

    const users = useSelector(store => store.GetUsersReducer)
    console.log(users);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    const toPost = () => {
        dispatch({ type: 'SET_CURRENT_THREAD', payload: thread.id })
        history.push('./post')
    }

    return (
        <div onClick={toPost}>
            <h2>{thread.title}</h2>
            <p>{thread.description}</p>
            <p>Created: {thread.timestamp}</p>
        </div>
    );
}

export default ForumThreadsItem;