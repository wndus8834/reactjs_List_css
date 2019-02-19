import React from 'react';
import Modal from './Modal';
import './PersonForm.css';

class PersonForm extends React.Component {
  constructor(props) {
    super(props);
    let person=props.value;
    this.state={
        // person:Object.assign({}, props.value),
        id: person.id,
        name: person.name,
        age: person.age,
        department: person.department,
        enrolled: person.enrolled,
    };
    

    this.departments=['소프', '컴공', '정통', '글티' ];
  }

  onInputChange(event) {
    let target = event.target;
    let name = target.name;
    let value = (target.type === "checkbox" || target.type === "radio" 
                   ? target.checked : target.value);
    this.setState({ [name]: value });
  }

  onSave(event) {
    let person = { id: this.state.id, name: this.state.name, age: this.state.age,
            department: this.state.department, enrolled: this.state.enrolled };
    this.props.onChange(person);
  }

  onCancel(event) {
    this.props.onCancel();
  }

  render() {
    let modal = (
      <div id="PersonForm">
        <Modal ref="personFormModal" show={ true } padding={ 10 } width={ 400 }>
          <h1>Person 수정</h1>
          <table>
            <tr>
              <td><label>ID </label></td>
              <td><input type="text" value={ this.state.id } disabled /></td>
            </tr>
            <tr>
              <td><label>이름 </label></td>
              <td><input type="text" name="name" value={ this.state.name } 
                                            onChange={ this.onInputChange.bind(this) } /></td>
            </tr>
            <tr>
              <td><label>나이 </label></td>
              <td><input type="text" name="age" value={ this.state.age } 
                                            onChange={ this.onInputChange.bind(this) } /></td>
            </tr>
            <tr>
              <td><label>재학 </label></td>
              <td><select name="department" value={ this.state.department } onChange={ this.onInputChange.bind(this) }>
                    <option value='소프'>소프</option>
                    <option value='컴공'>컴공</option>
                    <option value='정통'>정통</option>
                    <option value='글티'>글티</option>
                </select></td>
            </tr>
            <tr>
              <td><label>등록 </label></td>
              <td><input type="checkbox" name="enrolled" checked={ this.state.enrolled } 
                      onChange={ this.onInputChange.bind(this) } /></td>
            </tr>
          </table>
          <div>
            <button type="button" onClick={ this.onSave.bind(this) }>저장</button>
            <button type="button" onClick={ this.onCancel.bind(this) }>취소</button>
          </div>
        </Modal>
      </div>
    );
    return modal;
  }
}
export default PersonForm;
