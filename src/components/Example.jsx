import React from 'react'

const Example = (props) => {
  return (
    <div>
        Example { props.active ? "Activo": "Inactivo"}
    </div>
  )
}

export default Example