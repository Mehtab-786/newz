import React from 'react'
import useNewzHeadlines from './components/News';


function App() {
  const { data: newzHeadlines, loading, error } = useNewzHeadlines();  

  if (loading) return <div className='text-3xl font-serif font-semibold'>Loading...</div>;
  if (error) return <div className='text-3xl font-serif font-semibold'>{error}</div>;


  return (
    <div className="bg-gray-100 p-6">
    <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest News Headlines</h2>

    {/* Cards  */}
    {newzHeadlines.slice(0,5).map((articles,index) => (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex justify-between items-center" key={index}>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{articles.title}</h3>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{articles.description}</h2>
          <p className="text-gray-500 text-sm">Published on: {new Date(articles.publishedAt).toLocaleDateString()}, {new Date(articles.publishedAt).toLocaleTimeString()} </p>
        </div>
        <div>
        <img src={articles.urlToImage} className='w-40 h-40 object-cover bg-slate-500' alt="Image"/>
          <p className="text-gray-500 ">Source:{articles.source.name}</p>
        </div>
      </div>
    ))}
    

    
    <div className="text-center mt-6">
      <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">
        Load More 
      </button>
      <span className='font-extralight'>Funtionality yet to add</span>
    </div>
  </div>
</div>

  )
}

export default App
