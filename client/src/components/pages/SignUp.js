import React, { Component } from 'react';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: '',
    };
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.nickname === '') {
      /* TODO error handling */
      return;
    } else {
      this.props.setNickname(this.state.nickname);
      this.setState({ nickname: '' });
    }
  };

  render() {
    return (
      <main>
        <h1>Choose a Nickname</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='nickname'
            placeholder='Nickname'
            value={this.state.nickname}
            onChange={this.onChange}
            required
          />
          <input type='submit' value='Submit' />
        </form>
      </main>
    );
  }
}

export default SignUp;
