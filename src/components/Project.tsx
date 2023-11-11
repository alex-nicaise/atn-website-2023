import projectType from '../tsHooks/projectType';

const Project = (props: projectType): React.JSX.Element => {
  return (
    <div className="project">
        <h4>{props.title}</h4>
        <p>{props.notes}</p>
        <div className="project-img" style={{backgroundImage: `url(${props.imgUrl})`}}></div>
        <div className="project-btn-group">
            <a href={props.demoUrl}><button>Demo</button></a>
            <a href={props.srcCodeUrl}><button>Source Code</button></a>
        </div>
    </div>
  )
}

export default Project;