import React from 'react'
import './project.css'

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
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default project
