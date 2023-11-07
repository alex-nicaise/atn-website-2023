import React from 'react';
import projectType from '../tsHooks/projectType';

const Project = (props: projectType): React.JSX.Element => {
  return (
    <div className="project">
        <div className="project-img" style={{backgroundImage: `url(${props.imgUrl})`}}></div>
        <div className="project-btn-group">
            <a href={props.demoUrl}>Demo</a>
            <a href={props.srcCodeUrl}>Source Code</a>
        </div>
    </div>
  )
}

export default Project;