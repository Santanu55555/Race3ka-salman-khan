import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const ProjectItem = (t) => {
  const { imgUrl, desc, title, git, net } = t
  return (
    <div className="Santanu">
      <h2>{title}</h2>
      <img className="project-image" src={imgUrl} alt="projectImage" />

      <p style={{ fontSize: '15px', marginTop: '10px' }}>{desc}</p>

      <div className="deploy">
        <div className="github">
          <a
            href={git}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              fontSize: '18px',
              textDecoration: 'none',
              color: 'white',
              marginLeft: '30px',
              marginTop: '3px',
            }}
          >
            {' '}
            <p>Github</p> <p> </p>
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              style={{ color: 'black', marginLeft: '5px' }}
            />
          </a>
        </div>

        <div className="netlify">
          <a
            href={net}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'flex',
              fontSize: '18px',
              textDecoration: 'none',
              color: 'black',
              marginLeft: '30px',
              marginTop: '3px',
            }}
          >
            {' '}
            <p>Netlify</p>
            <FontAwesomeIcon
              icon={faGlobe}
              color="#4d4d4e"
              style={{ color: 'black', marginLeft: '5px' }}
            />
          </a>
        </div>
      </div>
    </div>
  )
}