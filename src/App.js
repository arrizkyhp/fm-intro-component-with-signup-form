import { BrowserRouter as Router, Route} from 'react-router-dom'
import "./assets/css/style.css"
import Home from "pages/Home"

function App() {
  return (
    <Router basename="/fm-intro-component-with-signup-form">
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
