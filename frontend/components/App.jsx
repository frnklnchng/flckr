import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from './splash/splash_container';
import PhotoIndexContainer from './photos/photo_index_container';
import PhotoShowContainer from './photos/photo_show_container';
import UploadFormContainer from './upload/upload_form_container';
// import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    
    <Switch>
      {/* <AuthRoute exact path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} /> */}
      <ProtectedRoute path="/upload" component={UploadFormContainer} />
      <ProtectedRoute path="/photos/:photoId" component={PhotoShowContainer} />
      <ProtectedRoute path="/home" component={PhotoIndexContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;