import './App.css';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Base from './Base';
import ButtonClickWithMultipleInput from "./Components/ButtonClickWithMultipleInput/Index";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Base}/>
        <Route exact path="/buttonclickwithmultipleinput" component={ButtonClickWithMultipleInput}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
