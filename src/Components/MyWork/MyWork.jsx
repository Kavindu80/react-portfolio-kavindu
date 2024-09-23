import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          {mywork_data.map((work,index)=>{
            return <a href={work.w_link} key={index} target='_blank'>
              <img key={index} src={work.w_img} alt="" />
            </a>
          })}
            
        </div>
        <a href="https://github.com/Kavindu80?tab=repositories" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>

            <div className="mywork-showmore"> 
              <p>Show More</p>
              <img src={arrow_icon} alt="arrow" />     
        </div>
        </a>   
    </div>
  )
}

export default MyWork