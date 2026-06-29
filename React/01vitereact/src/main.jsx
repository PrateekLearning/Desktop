import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Newchai from './Chai.jsx'


 // in react to crate an element use
 // .createElement('a or p i.e tag',
 //// {href: '' target:''},
 //  'tet we want to show')

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com' , target:'_blank'},
    'CLick me'
)


createRoot(document.getElementById('root')).render(
    
    reactElement
    
)
