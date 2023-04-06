import { useState } from 'react';
import people from './data';
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight
} from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index]
  
  const nextPerson = () => {
    setIndex((curIdx) => {
      return (curIdx + 1) % people.length;
    })
  }
  const prevPerson = () => {
    setIndex((curIdx) => {
      return (curIdx - 1 + people.length) % people.length;
    })
  }

  const randomPerson = () => {
    let randIdx = Math.floor(Math.random() * people.length);
    if (randIdx === index){ 
      randIdx = index + 1
    }
    const newIdx = randIdx % people.length
    setIndex(newIdx);
  }

  return <main>
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className="btn-container">
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='btn btn-hipster' onClick={randomPerson}>
        supprise-me
      </button>
    </article>
  </main>

};
export default App;
