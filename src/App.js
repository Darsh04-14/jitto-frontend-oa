
import { BarGraph } from './Components/BarGraph.tsx';
import './App.css';

function App() {
  let heights = [1491,1918,1552,1353, 1500, 1600, 2239, 1234, 2463, 1678, 768, 1000];
  let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return (
    <div className="App">
      <h1>Bar Graph</h1>
      <BarGraph heightsArray={heights} markerCount={10} labels={labels}/>
    </div>
  );
}

export default App;
