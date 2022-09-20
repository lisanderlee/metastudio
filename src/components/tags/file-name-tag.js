import './tags.css';


export default function ProjectTag(FileName) {
  
  return (
      <>
      <div className='project-name'>
        <p> {FileName.FileName}</p>           
      </div>
      </>
    )
  }