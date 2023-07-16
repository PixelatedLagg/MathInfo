class Section extends Component {
  render() {
    return (
      <div>
        <Switch>
          {blogs.map( blog => <Link to={`/blogs/${blog.id}`} /> )}
          <Route path="/blogs/:blogId  component={<Blog />}"/>
          </Switch>
        {this.props.match.params.id}
      </div>
    );
  }
}
//param here is what section