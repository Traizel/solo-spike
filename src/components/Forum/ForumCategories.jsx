import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function ForumCategories() {

    const categories = useSelector(store => store.ForumCategoriesReducer)
    console.log(categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES'})
    }, [])

    return (
        <div >
            <h1>TraizelCraft Forums</h1>
            <div>

            </div>
        </div>
    );
}

export default ForumCategories;