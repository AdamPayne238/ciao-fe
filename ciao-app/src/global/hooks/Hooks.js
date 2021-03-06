import { useState, useEffect } from "react"


export const filterSearch = initialValue => {

  const [ value, setValue ] = useState([initialValue])
  const [ filter, setFilter ] = useState([])

  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value),
        setFilter(data => {
          return data.first_name.toLowerCase().includes(search.toLowerCase())
        })
      }
    }
  }
}


// WORKING EXAMPLE
export const useInputStr = initialValue => {
  const [value, setValue] = useState([initialValue])

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value)
      }
    }
  }
}

// Trying to create a custom hook to deal with nested values
export const useNest = initialValue => {
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        console.log("useNest value state", value)
    }, [value])

    return{
        value,
        setValue,
        bind: {
            value,
            onClick: event => {
                setValue(event.target.value)
            }
        }
    }
}
