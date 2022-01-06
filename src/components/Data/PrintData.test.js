import { render, screen, fireEvent } from '@testing-library/react';
import PrintData from './PrintData';
import { BrowserRouter } from 'react-router-dom';
import Table from './Table';

const mockTable = () =>{
    return(
        <BrowserRouter>
            <Table/>
        </BrowserRouter>
    )
}
// describe('Print data existance check', ()=>{
//     it('check id',()=>{
//         const {queryByText}= render (<PrintData />);
//         const id = queryByText(/ID/i)
//         expect(id).toBeTruthy();
//     })
//     it('check id',()=>{
//         const {queryByText}= render (<PrintData />);
//         const id = queryByText(/FirstName/i)
//         expect(id).toBeTruthy();
//     })
//     it('check id',()=>{
//         const {queryByText}= render (<PrintData />);
//         const id = queryByText(/LastName/i)
//         expect(id).toBeTruthy();
//     })
//     it('check id',()=>{
//         const {queryByText}= render (<PrintData />);
//         const id = queryByText(/Actions/i)
//         expect(id).toBeTruthy();
//     })
//     it('check id',()=>{
//         const {queryByText}= render (<PrintData />);
//         const id = queryByText(/Delete/i)
//         expect(id).toBeTruthy();
//     })
// })
describe ('Print Data Functionality Check', () =>{
    it('check the data receivrd',()=>{
        const {queryByTitle, queryByRole, queryAllByText} = render(<Table/>)
        const dataCheckID = queryByTitle("firstName");
        const dataCheck = queryByTitle("firstName");
        const dataChecklname = queryByTitle("lastName");
        const addButton = queryByRole("button",{name: /ADD/i});
        fireEvent.change(dataCheckID,{target:{value:"1"}})
        fireEvent.change(dataCheck,{target:{value:"Diva"}})
        fireEvent.change(dataChecklname,{target:{value:"Garan"}})
        fireEvent.click(addButton)
        const findData =  queryAllByText(/Diva/i)
        const findDatalname = queryAllByText(/Garan/i)
        const findId = queryAllByText(/1/i)

        expect(findData).toBeTruthy();
        expect(findDatalname).toBeTruthy();
        expect(findId).toBeTruthy();
    })
    // it('check edit button', ()=>{
    //     const {queryByRole, queryByText} = render(<Table/>)
    //     const addBtn = queryByRole("button",{name:/Add/i})
    //     expect(addBtn).toBeTruthy();
    //     const EditButton = queryByText(/Edit/i)
    //     fireEvent.click(addBtn);
    //     expect (EditButton).toBeTruthy();
    // })
})