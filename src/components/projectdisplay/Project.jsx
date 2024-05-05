import React from 'react'
import './project.css'
import ImageRodation from '../../parts/ImageRodation'

const project = () => {
  return (
    <div className='project-main'>
           <h1 className='project-heading'>
            My Projects
           </h1>

           <h4 className='project-description'>
           projects are invaluable in shaping personal and professional growth, <br />
           serving as catalysts for learning, networking, and career development
           </h4>
            <div className='project-iterms'>
            <table class="table rounded-table bg-success">
            <thead className='table-dark'>
              <tr>
                <th scope="col">Project <br /> Name</th>
                <th scope="col">Project <br /> description</th>
                <th scope="col">Technology <br /> Used</th>
                <th scope="col">Project <br /> Source Code</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
              <tr>
                <th scope="row">Sport products <br /> selling website</th>
                <td>I have build entire <br /> website for user with <br /> neccsary funtionalities</td>
                <td>MERN stack</td>
                <td>
                  <a href="(https://github.com/Sathiskumarssf/sportsproducts) ">code</a>
                </td>
              </tr>
              <tr>
                <th scope="row">Electronic device <br /> E-commerce website</th>
                <td>I have build entire <br /> website for user with <br /> neccsary funtionalities</td>
                <td>HTML,JavaScript,PHP</td>
                <td>
                  <a href="https://github.com/Sathiskumarssf/technology-salewebsite">code</a>
                </td>
              </tr>
              <tr>
              <th scope="row">Dress selling <br />  website</th>
                <td>VEraity of dress are <br /> avilabe to  purchase <br /> for customers</td>
                <td>React,Node.js,Experss.js, <br /> SqL for database</td>
                <td>
                  <a href="https://github.com/Sathiskumarssf/dress">code</a>
                </td>
                
              </tr>
            </tbody>
        </table>
        
        </div>

        <div className="image-rotation-wrapper">
        <ImageRodation />
      </div>
    </div>
  )
}

export default project
