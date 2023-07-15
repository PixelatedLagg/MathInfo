

<BrowserRouter>
  /* Links */
  {heroes.map(hero => (<Link to={'heroes/' + hero.id} />)}

  /* Component */
  <Route path="heroes/:id" component={Hero} />
</BrowserRouter>

class Hero extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.id}
      </div>
    );
  }
}