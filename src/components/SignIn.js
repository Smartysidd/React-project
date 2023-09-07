// import React, { Component } from 'react';

// class SignIn extends Component {
//   constructor() {
//     super();
//     this.state = {
//       username: '',
//       password: '',
//     };
//   }

//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     const { username, password } = this.state;
//     // Handle sign-in logic here (e.g., send data to a server, check credentials)
//     console.log('Sign-in submitted:', { username, password });
//     // You can also clear the form fields or perform any other necessary actions
//     this.setState({
//       username: '',
//       password: '',
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Sign In</h2>
//         <form onSubmit={this.handleSubmit}>
//           <div>
//             <label htmlFor="username">Username/Email:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={this.state.username}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//               required
//             />
//           </div>
//           <button type="submit">Sign In</button>
//         </form>
//         <p>
//           <a href="/forgot-password">Forgot Password?</a>
//         </p>
//       </div>
//     );
//   }
// }

// export default SignIn;


import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // Handle sign-in logic here (e.g., send data to a server, check credentials)
    console.log('Sign-in submitted:', { username, password });
    // You can also clear the form fields or perform any other necessary actions
    this.setState({
      username: '',
      password: '',
    });
  };

  render() {
    return (
      <div className="sign-in-container">
        <h2>Sign In</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username/Email:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p>
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    );
  }
}

export default SignIn;