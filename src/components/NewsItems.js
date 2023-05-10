import React from 'react'

const NewsItems =(props)=>{

    let {title,description,imageurl,newsurl,source,author,date}=props
    return (
      <div className='container my-3'>
        <div className="card" style={{width: '18 rem'}}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill text-bg-danger" 
        style={{left: '90%',zIndex:'1'}}>
          {source}
          </span>

  <img src={!imageurl?"https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/28/2022-07-26t054702z847136938rc2fgv9jy670rtrmadp3climate-change-europe-glaciersjpg-1213834-1682686809.jpg":imageurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">
      <small className="text-body-secondary">
        By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>


    <a href={newsurl} className="btn btn-dark">Go somewhere</a>
  
  </div>
</div>
    
      </div>
    )
  }


export default NewsItems
