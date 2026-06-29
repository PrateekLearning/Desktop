

//4.    // Writing the method funtion - we will create the element using reactelement from parameters as we want to make a modularfunction also with . type to its type

// function customRender(Element,container){
//     // const domElement = document.createElement(Element.type)
//     // domElement.innerHTML = Element.children
//     // domElement.setAttribute('href', Element.props.href)
//     // domElement.setAttribute('target',Element.props.target)

//     // container.appendChild(domElement)
// }


//4. Better way using for in loop as dont want to write set attributes reapeadetly rather we would run an iteration code

function customRender(Element,Container){
    const domElement = document.createElement(Element.type)
    domElement.textContent = Element.children
    for (const prop in Element.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,Element.props[prop])
    }
    Container.appendChild(domElement)

}


//2.    // To create a react element(it is an object) we need to give some predefined things to it that react knows 
// 1. such as type of element i.e p,a,div  
// 2. then properties as props like href or if nothing is there just leave the object blank as props are given as objects and 
// 3. third is chilfren like what we need to store or write inside in it 


//Lets create the element now

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to get to google'
    
}
//1.    //Here we got the refernce of the html page where everything will be going to work
const mainContainer = document.querySelector("#root");

//3.    //Now we will write the method which is going to caall the element and where we need to put the element in this are the parameters of this method

customRender (ReactElement,mainContainer)

