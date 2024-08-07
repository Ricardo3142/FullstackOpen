

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

//The index is necessary because React requires that each element in a list have a unique key
//Content component
const Content = ({ parts}) =>{
    return(
      <div>
        {parts.map((part, index) =>(
          <Part key = {index} name={part.name} exercises={part.exercises}/>
        ))}
      </div>
    )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return(
    <p>Number of exercises = {totalExercises}</p>
  )
}


const App = () => {

  const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App