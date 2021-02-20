import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ForumCategoriesItem from './ForumCategoriesItem';

function ForumCategories() {

    const categories = useSelector(store => store.ForumCategoriesReducer)
    console.log(categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_CATEGORIES'});
    }, [])

    return (
        <div >
            <h1>TraizelCraft Forums</h1>
            <div>
                {categories.map(category =>
                ( <ForumCategoriesItem category={category} key={category.id}/> )
                )}
            </div>
        </div>
    );
}

export default ForumCategories;