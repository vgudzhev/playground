var BootstrapButton = React.createClass({
  loadScriptFromServer: function(){
    $.getScript( this.props.source, function( data, textStatus, jqxhr ) {
            console.log( data ); // Data returned
            console.log( textStatus ); // Success
            console.log( jqxhr.status ); // 200
            console.log( "Load was performed." );
          });
  },
  render: function() {
    return (
      <a {...this.props}
        href="javascript:;"
        role="button"
        onClick={this.loadScriptFromServer()}
        className={(this.props.className || '') + ' btn'} />
    );
  }
});

//*Coponents
var ComponentBox = React.createClass({
  loadComponentsFromServer: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    this.loadComponentsFromServer();
    setInterval(this.loadComponentsFromServer, this.props.pollInterval);
  },
  render: function() {
    return (
      <div className="componentBox">
        <h1>Components</h1>
        <ComponentList data={this.state.data} />
      </div>
    );
  }
});
var ComponentList = React.createClass({
  render: function() {
      var componentNodes = this.props.data.map(function(component) {
        return (
          <li key={component.id} className="menu-list">
            <Component componentName={component.componentName} included={component.included} key={component.id} source={component.source} />
          </li>
        );
      });
      return (
        <ul className="nav nav-sidebar">
              {componentNodes}
        </ul>
      )
  }
});
var Component = React.createClass({
  render: function() {
    var isIncluded = this.props.included == 'yes';
    var classForButton = isIncluded ?"btn-success":"btn-danger";
    return (
        <BootstrapButton className={classForButton} source={this.props.source} onClick={loadScriptFromServer()}>
          {this.props.componentName}: {this.props.included == "yes" ? "included" : "not included"}
        </BootstrapButton>
    );
  }
});

//*Render of the page
ReactDOM.render(
  <ComponentBox  url="/inteQloud/data/components.json" pollInterval={2000} />,
  document.getElementById('componentContainer')
);
