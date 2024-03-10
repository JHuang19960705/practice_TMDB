import React  from "react";
import SlideAfterSearch from "./SlideAfterSearch";

export default function SearchPic({ data, newSlide, setNewSlide}) {
  // let [slide, setSlide] = useState([]);
  // let [page, setPage] =useState(1);
  // let [currentSearch, setCurrentSearch] = useState("");
  // const morePicture = async() => {
  //   let newURL;
  //   setPage(page + 1);
  //   if( currentSearch === ""){
  //     newURL = `https://api.themoviedb.org/3/tv/popular?language=ja-JP&page=${ page + 1 }&api_key=${API_KEY}`;
  //   } else {
  //     newURL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${input}&page=${ page + 1 }&include_adult=false`
  //   }
  //   let result = await axios.get(newURL);
  //   setData(data.concat(result.data.results));
  // };
  // const handleSlide = (e) => {
  //   let TMDBId = e.currentTarget.dataset.tmdbId;
  //   setSlide([...slide, TMDBId]);
  // }
  return (
    <div>
      {
        data && data.map((d) => { 
          if (d.poster_path && d.original_name ) {
            return (
              <SlideAfterSearch data={d} newSlide={newSlide} setNewSlide={setNewSlide}/>
            )
          }
        })
      }
    </div>
  )
}
