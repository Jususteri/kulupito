import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Item from './item';

test('renders item from props data', () => {
     render(<Router>
         <Item data={{
        id: "1234",
        type: "Sähkö",
        receiver: "Elenia",
        amount: 86,
        paymentDate: "2022-10-10",
        periodStart: "",
        periodEnd: ""
     }} />
    </Router> );

     const type = screen.getByText(/Sähkö/i);
     expect(type).toBeInTheDocument();
     const receiver = screen.getByText(/Elenia/i);
     expect(receiver).toBeInTheDocument();
});