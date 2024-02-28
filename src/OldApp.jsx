import Contact from "./assets/Contact";
import Counter from "./assets/Counter";
import Hello from "./assets/Hello"

function App() {

    const helloData = [
      {name: 'Ratchanon' , message: 'Hi there'},
      {name: 'Tom' , message: 'Hello...'}
    ];
  
    return(
      <div className="App">
        <Counter />
        {helloData.map((data , index) =>
        <Hello key={index} name={data.name} message = {data.message} />
        )}

        <Contact email="s6406021611034@email.kmutnb.ac.th" phone="0979436391" />
      </div>
    )
}

export default App