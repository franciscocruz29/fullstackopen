import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);
  return (
    <>
        {parts.map(part => 
        <>
          <Part key={part.id} part={part} />
        </>
        )}
        <p>
          <strong>Total of {total} exercises</strong>
        </p>
    </>
  )
}

export default Content