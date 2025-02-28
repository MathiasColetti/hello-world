// import logo from './logo.svg';
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <SecondComponent />
      {/* <p>Meu primeiro paragrafo em REact</p> */}
      <TemplateExpressions />
    </div>
  );
}
// rafce

export default App;
