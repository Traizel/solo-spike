import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ThreadItem from './ThreadItem';

function Thread() {

    const currentCategory = useSelector(store => store.CurrentCategoryReducer);
    const threads = useSelector(store => store.ForumThreadsReducer);
    console.log(currentCategory);
    console.log(threads);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_THREADS', payload: currentCategory });
    }, [])

    return (
        <div >
            <h1>TraizelCraft Forums</h1>
            <div>
                {threads.map(thread =>
                    (<ThreadItem thread={thread} key={thread.id} />)
                )}
            </div>
        </div>
    );
}

export default Thread;