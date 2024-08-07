

//Header component
const Header = ({ course }) => {
  return(
    <h1> {course} </h1>
  )
}

//Part component
const Part = ({name, exercises}) => {
  return (
    <p>{name} = {exercises}</p>
  )
}

//Content component
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3}) =>{
    return(
      <div>
        <Part name={part1} exercises={exercises1}/>
        <Part name={part2} exercises={exercises2}/>
        <Part name={part3} exercises={exercises3}/>
      </div>
    )
}

const Total = ({total}) => {
  return(
    <p>Number of exercises = {total}</p>
  )
}


const App = () => {

  const course = 'Half Stack application development'
  
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }

  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const totalExercises = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header course = {course}/>
      <p>{part1.name} = {part1.exercises}</p>
      <p>{part2.name} = {part2.exercises}</p>
      <p>{part3.name} = {part3.exercises}</p>
      <Total total={totalExercises}/>
    </div>
  )
}


export default App