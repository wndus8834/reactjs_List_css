import React from 'react';
import './PersonList.css';

class PersonList extends React.Component {
  onTrClick(index) {
    this.props.onPersonSelect(index);
  }

  renderPerson(person, index) {
    return (
      <tr key={ person.id } onClick={ this.onTrClick.bind(this, index) } className="clickable">
          <td>{ person.id }</td>
          <td>{ person.name }</td>
          <td>{ person.age }</td>
          <td>{ person.department }</td>
          <td>{ person.enrolled? 'o':'x' }</td>
      </tr>
    );
  }

  render() {
    let persons = this.props.value;
    let tags=persons.map((person, index) => this.renderPerson(person, index));
    return (
      <div id="personList">
        <h1>Person 목록</h1>
        <table id="personList">
          <thead>
            <tr>
              <th>id</th>
              <th>이름</th>
              <th>나이</th>
              <th>학과</th>
              <th>등록</th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
      </div>
    );
  }
}
export default PersonList;
