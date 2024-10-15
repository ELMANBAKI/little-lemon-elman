import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import { act } from 'react';

test('renders Booking Form', () => {
  render(
    <BrowserRouter>
      <BookingForm />
    </BrowserRouter>
  );

  const nameInput = screen.getByLabelText(/الاسم/i);
  
  // استخدام act عند التفاعل مع المكونات إذا كنت بحاجة لذلك
  act(() => {
    fireEvent.change(nameInput, { target: { value: 'علي' } });
  });

  expect(nameInput.value).toBe('علي');
});


