import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'

function ForumCategoriesItem({ category }) {

    const users = useSelector(store => store.GetUsersReducer)
    console.log(users);
    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    const toThread = () => {
        dispatch({ type: 'SET_CURRENT_CATEGORY', payload: category.id })
        history.push('./thread')
    }

    return (
        <div onClick={toThread}>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
        </div>
    );
}

export default ForumCategoriesItem;