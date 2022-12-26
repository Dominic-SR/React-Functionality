import './App.css';
import { Switch, Route, BrowserRouter} from "react-router-dom";
import Base from './Base';
import ButtonClickWithMultipleInput from "./Components/ButtonClickWithMultipleInput/Index";
import usestatehooks from "./Components/UseStateHooks/Index";
import useeffecthooks from "./Components/UseeffectHooks/Index";
import usecontexthooks from "./Components/UseContextHooks/Index"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Base}/>
        <Route exact path="/buttonclickwithmultipleinput" component={ButtonClickWithMultipleInput}/>
        <Route exact path="/usestatehooks" component={usestatehooks} />
        <Route exact path="/useeffecthooks" component={useeffecthooks} />
        <Route exact path="/usecontexthooks" component={usecontexthooks} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
