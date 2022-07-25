import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"
import { useState } from "react"

const checkIfEmpty = (...args) => args.map(a => a.length === 0).includes(true)

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFiltered] = useState([])
  const [info, setInfo] = useState({
    name: "",
    number: "",
  })

  const filterPersons = (e) => {
    const text = e.target.value
    const copy = [...persons]
    const filtered = text ? copy.filter(person => person.name.toLowerCase().includes(text.toLowerCase())) : copy
    setFiltered(filtered)
  }

  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name: info.name,
      number: info.number,
      id: persons.length + 1
    }

    const exists = persons.find(person => person.name.toLowerCase() === info.name.toLowerCase())

    if (exists) {
      alert(`${info.name} is already added to phonebook`)
    } else if (checkIfEmpty(info.name, info.number)) {
      alert("Name and number must be filled")
    } else {
      setPersons(persons.concat(newPerson))
      setFiltered (persons.concat(newPerson))
      setInfo({
        name: "",
        number: "",
        id: null
      })
    }
  }

  const handleNameChange = (event) => {
    setInfo({ ...info, name: event.target.value })
  }

  const handleNumberChange = (event) => {
    setInfo({ ...info, number: event.target.value })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterPersons={filterPersons} />
      <h2>Add a new</h2>
      <PersonForm
        info={info}
        onChangeName={handleNameChange}
        onChangeNumber={handleNumberChange}
        onSubmit={addPerson}
      />
      <h2>Numbers</h2>
      <Persons persons={filter} />
    </div>
  )
}

export default App
