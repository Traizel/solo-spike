import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PostItem from './PostItem';

function Post() {

    const currentThread = useSelector(store => store.CurrentCategoryReducer);
    const posts = useSelector(store => store.ForumPostsReducer);
    console.log(currentThread);
    console.log(posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_POSTS', payload: currentThread });
    }, [])

    return (
        <div >
            <h1>TraizelCraft Forums</h1>
            <div>
                {posts.map(post =>
                    (<PostItem post={post} key={post.id} />)
                )}
            </div>
        </div>
    );
}

export default Post;