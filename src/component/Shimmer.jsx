import React from 'react'

function Shimmer() {
    return (
        <div className="card-text flex lex-col flex-wrap gap-3">

          {Array.from({length:20}).map((el , i)=>{
              return <div key={i} className='h-[200px] w-[170px] bg-slate-200 '></div>
          })
          } 
             
            
        </div>
    )
}

export default Shimmer
