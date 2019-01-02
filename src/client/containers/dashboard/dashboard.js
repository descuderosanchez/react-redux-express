import React, { Component } from 'react';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

const componenteEjemplo = () => {
  return(
    <div>
      <h1>Componente ejemplo</h1>
    </div>
  );
}

const componenteEjemplo2 = () => {
  return(
    <div>
      <h1>Componente ejemplo 2</h1>
    </div>
  );
}

const componenteEjemplo3 = () => {
  return(
    <div>
      <h1>Componente ejemplo 3</h1>
    </div>
  );
}

class Dashboard extends Component {
  constructor(props){
    super(props);
  }


  render () {
    return(
       <div className="container-fluid">
            <Switch location={this.props.location}>
                <Route exact path="/dashboard" component={componenteEjemplo2} />
                <Route exact path='/parte-diario' component={componenteEjemplo3} />
                <Route exact path='/hospitalizados' component={componenteEjemplo} />
                <Route exact path='/calendario' component={componenteEjemplo3} />
                <Route exact path='/administracion' component={componenteEjemplo3} />
                <Route exact path='/centros-veterinarios' component={componenteEjemplo} />
                <Route exact path='/administracion' component={componenteEjemplo2} />
                <Redirect to="/dashboard" />
            </Switch>
        </div>
    );
  }
}

export default withRouter(Dashboard);