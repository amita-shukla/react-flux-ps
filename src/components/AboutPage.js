import React from "react";

class AboutPage extends React.Component {
  render() {
    return (
      // <> is a React Fragment, this is because JSX elements can't be written side by side.
      <>
        <h2>About</h2>
        <p>This app uses react.</p>
      </>
    );
  }
}

export default AboutPage;
