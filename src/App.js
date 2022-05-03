import './App.css';
import Container from './components/Container';
import Header from "./components/Header";
import data from "./data";

export default function App() {
  const cards = data.map(item => {
    return (
      
        <Container 
            {...item}
        />
    )
}) 
  
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}


