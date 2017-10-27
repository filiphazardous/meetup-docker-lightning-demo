import React from 'react';

export default class UserData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {userKeys: [], userData: {}};
  }

  componentDidMount() {
    fetch(`/user/${this.props.id}?_format=json`,
      {credentials: 'same-origin'} // This is what makes cookie login work!
      )
      .then(result => {
        result.json().then(json => {
          this.setState({userKeys: Object.keys(json), userData: json});
        });
      });
  }

  render() {
    return (
      <div>
        <div>User:</div>
        {this.state.userKeys.length > 0 ? (
          <ul>
            <li>User: {this.state.userData.name[0].value}</li>
            <li>Uid: {this.state.userData.uid[0].value}</li>
            <li>Mail: {this.state.userData.mail[0].value}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}