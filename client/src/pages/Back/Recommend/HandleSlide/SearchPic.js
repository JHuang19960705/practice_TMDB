import React  from "react";
import SlideAfterSearch from "./SlideAfterSearch";

export default function SearchPic({ data, newSlide, setNewSlide}) {
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
