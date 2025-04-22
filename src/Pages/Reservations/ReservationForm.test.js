import { render, screen, fireEvent, act } from "@testing-library/react";
import ReservationForm from './ReservationForm';

describe('ReservationForm Component Tests', () => {
    test('renders the form with available times', () => {
        const mockAvailableTimes = ['17:00', '18:00', '19:00'];
        const mockUpdateTimes = jest.fn();
        const mockSubmitForm = jest.fn();

        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                updateTimes={mockUpdateTimes}
                submitForm={mockSubmitForm}
            />
        );

        const headingElement = screen.getByText("Make Your Reservation");
        expect(headingElement).toBeInTheDocument();
    });

    test('shows validation errors for empty required fields', async () => {
        const mockAvailableTimes = ['17:00', '18:00', '19:00'];
        const mockUpdateTimes = jest.fn();
        const mockSubmitForm = jest.fn();

        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                updateTimes={mockUpdateTimes}
                submitForm={mockSubmitForm}
            />
        );

        // Submit the form without filling any fields
        const submitButton = screen.getByRole('button', { name: /make your reservation/i });
        await act(async () => {
            fireEvent.click(submitButton);
        });

        // Check for validation error messages
        expect(await screen.findByText(/first name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/last name is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/phone number is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/time is required/i)).toBeInTheDocument();
    });

    test('does not show validation errors for valid inputs', async () => {
        const mockAvailableTimes = ['17:00', '18:00', '19:00'];
        const mockUpdateTimes = jest.fn();
        const mockSubmitForm = jest.fn();

        render(
            <ReservationForm
                availableTimes={mockAvailableTimes}
                updateTimes={mockUpdateTimes}
                submitForm={mockSubmitForm}
            />
        );

        // Fill out the form with valid inputs
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/first name/i), { target: { value: 'John' } });
            fireEvent.change(screen.getByLabelText(/last name/i), { target: { value: 'Doe' } });
            fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john.doe@example.com' } });
            fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '123-456-7890' } });
            fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: '2025-04-23' } });
            fireEvent.change(screen.getByLabelText(/select time/i), { target: { value: '17:00' } });

            // Submit the form
            const submitButton = screen.getByRole('button', { name: /make your reservation/i });
            fireEvent.click(submitButton);
        });

        // Ensure no validation errors are displayed
        expect(screen.queryByText(/is required/i)).not.toBeInTheDocument();
        expect(mockSubmitForm).toHaveBeenCalledWith({
            fName: 'John',
            lName: 'Doe',
            email: 'john.doe@example.com',
            tel: '123-456-7890',
            people: 1,
            date: '2025-04-23',
            time: '17:00',
            occasion: '',
            preferences: '',
        });
    });
});