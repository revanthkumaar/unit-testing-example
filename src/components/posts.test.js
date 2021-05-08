
import { render, screen } from '@testing-library/react';
import Async from './posts.component'

describe('posts component ... ', () => {

test('renders posts if request is successful', () => {

    render (<Async/>);

    const listItemElements = screen.getAllByRole('listitem');
    //const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0)



})





});