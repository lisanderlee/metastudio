import './tags.css';


export default function DividerTag({text}) {
    return (
      <>
      <div className='divider-text'>
        <p> {text}</p>           
      </div>
      </>
    )
  }