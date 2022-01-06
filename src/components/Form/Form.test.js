import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form'

describe('Input Form Existance check',()=>{
  test('check Student Details',() => {
    const {queryAllByRole} =render(<Form/>);
    const Info = queryAllByRole("input");
    expect(Info).toBeTruthy();
  });
  test('check Employee ID',() => {
    const {queryByText} =render(<Form/>);
    const id = queryByText(/Employee ID/i);
    expect(id).toBeTruthy();
  });
  test('check Employee FirstName',() => {
    const {queryByText} =render(<Form/>);
    const fname = queryByText(/FirstName/i);
    expect(fname).toBeTruthy();
  });
  test('check Employee LastName',() => {
    const {queryByText} =render(<Form/>);
    const lname = queryByText(/LastName/i);
    expect(lname).toBeTruthy();
  });
  test('check Number of inputFields',() => {
    const {queryAllByRole} =render(<Form/>);
    const inputCount = queryAllByRole("textbox");
    expect(inputCount.length).toBe(3);
  });
  test('check Button',() => {
    const {queryByRole} =render(<Form/>);
    const btn = queryByRole("button");
    expect(btn).toBeTruthy();
  });
})

describe('input form working check' , ()=>{
  it('should render the change in the input',()=>{
    const {queryByTitle} = render(<Form/>);
    const inputChange = queryByTitle("id");
    fireEvent.change(inputChange, {target : {value : "1"}})
    expect(inputChange.value).toBe("1");
  })
  it('should render the change in the input',()=>{
    const {queryByTitle} = render(<Form/>);
    const fnameChange = queryByTitle("firstName");
    fireEvent.change(fnameChange, {target : {value : "Divagaran"}})
    expect(fnameChange.value).toBe("Divagaran");
  })
  it('should render the change in the input',()=>{
    const {queryByTitle} = render(<Form/>);
    const lnameChange = queryByTitle("lastName");
    fireEvent.change(lnameChange, {target : {value : "Raja"}})
    expect(lnameChange.value).toBe("Raja");
  })
})