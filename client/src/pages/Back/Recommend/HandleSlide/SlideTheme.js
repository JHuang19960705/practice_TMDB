import React from 'react'
import { Outlet, Link } from "react-router-dom"
const tmdbBaseURL = "https://image.tmdb.org/t/p/original";

export default function SlideTheme({data}) {
  const handleSlide = (e) => {
    let TMDBId = e.currentTarget.dataset.tmdbId;
    setSlide([...slide, TMDBId]);
  }
  return (
    <tbody className="text-gray-600 dark:text-gray-100">
      <tr>
        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            {data.original_name}
          </div>
        </td>
        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <Link to={`/movie/${data.id}`} className="imageContainer" target="_blank">
              <img className='w-20' src={ tmdbBaseURL + data.poster_path} />
            </Link>
          </div>
        </td>
        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 md:table-cell hidden">{data.origin_country}</td>
        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800 text-green-500">
          {
            data.genre_ids && 
            data.genre_ids.map(
              (id)=>{return(<span className="mr-10">{id}</span>)}
            )
          }
        </td>
        <td className="sm:p-3 py-2 px-1 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center">
            <div className="sm:flex hidden flex-col">
              {data.first_air_date && (data.first_air_date)}
            </div>
            <button onClick={handleSlide} data-tmdb-id={data.id} className="btn btn-light btn-sm">選取slide</button>
          </div>
        </td>
      </tr>
    </tbody>
  )
}
