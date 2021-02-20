import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ForumCategoriesItem({ category }) {

    const categories = useSelector(store => store.ForumCategoriesReducer)
    const users = useSelector(store => store.GetUsersReducer)
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES' });
        dispatch({ type: 'FETCH_USERS' })
    }, [])

    return (
        <div>
            <h2>{category.title}</h2>
            <p>{category.description}</p>
        </div>
    );
}

export default ForumCategoriesItem;