import React from 'react'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Example from './components/Example'

export const App = () => {
    return (
        <div>
            <h1>Hola desde React</h1>
            <Heading className="text-primary" text="Hola desde React 1" />
            <Paragraph />
            <Heading className="text-secondary" text="Hola desde React 2" />
            <Paragraph />
            <Heading className="text-warning" text="Hola desde React 3" />
            <Paragraph />
            <Heading className="text-danger" text="Hola desde React 4" />
            <Paragraph />
            <Heading className='text-light' text="Hola" />
            <Example num={1} active={true} name={"name"} obj={{a: 1, b: 2}} notas={[1,2,3,4]} />
        </div>
    )
}
