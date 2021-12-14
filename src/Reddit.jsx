import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import useFetch from './useFetch';

export default function Reddit() {

     // including React Query

     const {data: posts,
          isLoading,
          isError,
          error,
          isSuccess,
     } = useQuery('posts', fetchPosts, {
          retry:false,
     });
     

     function fetchPosts () {
          return fetch('https://www.reddit.com/r/aww.json')
               .then(response => response.json())
     }

     // including useFetch hook 
     // const {data: posts, isLoading, errorMessage} = useFetch('https://www.reddit.com/r/aww.json')


     // code before including useFetch hook
     // const [posts, setPosts] = useState([]);
     // const [isLoading, setIsLoading] = useState(true);
     // const [errorMessage, setErrorMessage] = useState(null);

     // useEffect(() => {
     //      fetch('https://www.reddit.com/r/aww.json')
     //           .then(response => response.json())
     //           .then(results => {
     //                // console.log(results.data.children)
     //                setIsLoading(false);
     //                setPosts(results.data.children);
     //           })
     //           .catch(error => {
     //                setIsLoading(false);
     //                setErrorMessage('There was an error');
     //           })
     // }, [])

     return (
          <div>
               <h2>Reddit API</h2>
               {isLoading && <div>Loading ...</div>}
               {/* useFetch hook */}
               {/* {posts && (
                    <ul>
                         {posts.data.children.map(post => (
                              <li key={post.data.id}>
                                   <a href={`https:www.reddit.com${post.data.permalink}`}>
                                        {post.data.title}
                                   </a>
                              </li>
                         ))}
                    </ul>
               )}
               {errorMessage && <div>{errorMessage}</div>} */}
               
               {/* use React query */}
               {isSuccess && (
                    <ul>
                         {posts.data.children.map(post => (
                              <li key={post.data.id}>
                                   <a href={`https:www.reddit.com${post.data.permalink}`}>
                                        {post.data.title}
                                   </a>
                              </li>
                         ))}
                    </ul>
               )}
               {isError && <div>{error.message}</div>}
          </div>
     )
}
