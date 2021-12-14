import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import useFetch from './useFetch'

export default function Joke() {
     const {data: joke,
          isLoading,
          isError,
          error,
          isSuccess,
     } = useQuery('joke', fetchJoke, {
          // staleTime:6000,
          refetchOnWindowFocus:false,
     });
     

     function fetchJoke () {
          return fetch('https://official-joke-api.appspot.com/jokes/random')
               .then(response => response.json())
     }
     
     // const {data:joke, isLoading, errorMessage} = useFetch('https://official-joke-api.appspot.com/jokes/random')


     // const [joke, setJoke] = useState(null);
     // const [isLoading, setIsLoading] = useState(true);
     // const [errorMessage, setErrorMessage] = useState(null);

     // useEffect(() => {
     //      fetch('https://official-joke-api.appspot.com/jokes/random')
     //           .then(response => response.json())
     //           .then(result => {
     //                // console.log(results.data.children)
     //                setIsLoading(false);
     //                setJoke(result.setup + ' ' + result.punchline);
     //           })
     //           .catch(error => {
     //                setIsLoading(false);
     //                setErrorMessage('There was an error');
     //           })
     // }, [])

     return (
          <div>
               <h2>Joke API</h2>
               {isLoading && <div>Loading ...</div>}
               {isSuccess && <div>{joke.setup + ' ' + joke.punchline}</div>}
               {isError && <div>{error.message}</div>}
          </div>
     )
}
