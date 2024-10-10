import { useEffect, useState } from "react"

let apiKey = "819074ca1ee749c7a64eb9b8ce557728" 


function useNewzHeadlines() {

    const [data, setData] = useState([])
    const [error, setError] = useState(null);  // Track error
    const [loading, setLoading] = useState(true);  // Track loading state
    
    useEffect(() => {
        setLoading(true)
        fetch( `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(res => res.json())
        .then((res) => {
          
            if (res.status === "ok") {
              setData(res.articles);  // Set the articles array in state
              setLoading(false); // Set loading to false after response
              setError(null);  // Clear any previous errors
            } else {
              setError("Failed to fetch news");
            }
          })
            .catch((err) => {
              setError("An error occurred while fetching news"); // Handle network or other errors
              setLoading(false); // Stop loading on error
            });
    },[])
    return { data, error, loading }; // Return all states

}
export default useNewzHeadlines
