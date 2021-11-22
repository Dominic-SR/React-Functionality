import './App.css';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Base from './Base';
import ButtonClickWithMultipleInput from "./Components/ButtonClickWithMultipleInput/Index";
import useeffecthooks from "./Components/UseeffectHooks/Index"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Base}/>
        <Route exact path="/buttonclickwithmultipleinput" component={ButtonClickWithMultipleInput}/>
        <Route exact path="/useeffecthooks" component={useeffecthooks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
