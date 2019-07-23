import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: []
  };

  //this life cycle method is used to set some state when a page loads
  // this is the proper lifecycle method for API calls.
  // The component must be mounted before we set state.
  // the component has mounted by the time this method runs.
  componentDidMount() {
    // getCourses is an API call, (check courseApi.js) and uses a promise.
    // in 'then' we provide the function to execute after the API call has been made.
    getCourses().then(courses => this.setState({ courses: courses }));
  }

  // observe that we don't need to pass 'course' when we call this function from map
  renderCourseRow(course) {
    return (
      <tr>
        <td>{course.title}</td>
        <td>{course.authorId}</td>
        <td>{course.category}</td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <h2>Courses</h2>;
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>{this.state.courses.map(this.renderCourseRow)}</tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
