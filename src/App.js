import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from "react-router-dom";
import { Component } from 'react';

 export default class App extends Component{
      state = {
            progress:0,
        }
  apikey=process.env.REACT_APP_NEWS_API
  //'895902edaae44fea879e0f2849fd7f9c'
        setProgress=(progress)=>{
      this.setState({progress:progress})
        }
        render(){
  return (<div className="">
      
<Navbar />
<LoadingBar
        color='#f11946'
        height={5}
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
      />


<Switch>
          <Route exact path="/">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15" key="general" country="in" category="general" />
          </Route>
          <Route exact path="/business">
    <News setProgress={this.setProgress}  apikey={this.apikey} pageSize="15" key="business" country="in" category="business" />
          </Route>
          <Route exact path="/entertainment">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15" key="entertainment" country="in" category="entertainment" />
          </Route>
          <Route exact path="/health">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15"key="health" country="in" category="health" />
          </Route>

          <Route exact path="/science">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15" key="science" country="in" category="science" />
          </Route>

          <Route exact path="/sports">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15" key="sports" country="in" category="sports" />
          </Route>

          <Route exact path="/technology">
    <News setProgress={this.setProgress} apikey={this.apikey} pageSize="15" key="technology" country="in" category="technology" />
          </Route>
</Switch>
</div>);
        }
}
