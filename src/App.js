import './App.css';
import BarChart from './BarChart';


export default function App() {

//TO DO https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json
  return (
    <div className="App">
          <div id="title">United States GDP</div>
          <BarChart/>
      </div>
  );
}