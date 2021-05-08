import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductPage from './product-page'
import userEvent from '@testing-library/user-event'

//grouping the tests to test suites
//PRODUCT COMPONENT TEST SUITE
describe('product component', () => {

    //individual test 1
test('testing title of the page', () => {

    //arrange
    render(<ProductPage/>);

    //act 
    //...blank

    //assert 
    const productsElement = screen.getByText('Products')
    expect(productsElement).toBeInTheDocument();
});

//individual test 2

test('renders : Not wearing a mask if button was not click', () => {

    render(<ProductPage/>);
   const wearMask = screen.getByText('Not wearing a mask', {exact:true});
   expect(wearMask).toBeInTheDocument();

});


//individual test 3

test('button click test', () => {

    //arrange

    render(<ProductPage/>);

    //act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    //assert
    const outputElement = screen.getByText('oh yea! mask here...',{exact:false})
    expect(outputElement).toBeInTheDocument();



});




});



//syntax: test(description,anonymous function)