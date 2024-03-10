import React from 'react'

export default function FavoritePage() {
  return (
    <div>
      <div className="p-kv">
        <h1>
          <div className="u-ttlani">
            {}
          </div>
          <div className="p-kv__number">
            <div className="u-ttlani -interview">
            {}
            </div>
          </div>
        </h1>

        <div className="p-kv__cnt ">
          <p className="p-kv__cnt__txt_01">
            {}
            <br/>
            {}
            <br/>
            {}
          </p>
          <p className="p-kv__cnt__img">
            <img src="${celebrity.img.rectangle}" alt="" className="u-pc"/>
          </p>
          <p className="p-kv__cnt__txt_02">
            <span className="p-kv__cnt__txt_02__name">
              {}
            </span>
          </p>
        </div>
      </div>
    
    
    
      <div className="p-questions">
        <h2 className="p-questions__heading_h2 ">Introduction</h2>
        <dl className="p-questions__cnt">
          <dt>{}</dt>
          <dd>{}</dd>
        </dl>
      </div>
    </div>
  )
}
