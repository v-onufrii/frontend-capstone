import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./ReservationForm.css";

const ReservationForm = (props) => {
    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times, index) => <option key={index + times}>{times}</option>)
    );

    const formik = useFormik({
        initialValues: {
            fName: "",
            lName: "",
            email: "",
            tel: "",
            people: 1,
            date: "",
            time: "",
            occasion: "",
            preferences: "",
        },
        validationSchema: Yup.object({
            fName: Yup.string()
                .min(2, "First name must be at least 2 characters")
                .max(50, "First name must be 50 characters or less")
                .required("First name is required"),
            lName: Yup.string()
                .min(2, "Last name must be at least 2 characters")
                .max(50, "Last name must be 50 characters or less")
                .required("Last name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            tel: Yup.string()
                .matches(/^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/, "Invalid phone number")
                .required("Phone number is required"),
            people: Yup.number()
                .min(1, "At least 1 person is required")
                .max(100, "Cannot exceed 100 people")
                .required("Number of people is required"),
            date: Yup.date()
                .required("Date is required"),
            time: Yup.string()
                .required("Time is required"),
        }),
        onSubmit: (values) => {
            props.submitForm(values);
        },
    });

    function handleDateChange(e) {
        const selectedDate = e.target.value;
        formik.setFieldValue("date", selectedDate);

        const date = new Date(selectedDate);
        props.updateTimes(date);

        setFinalTime(props.availableTimes.map((times, index) => <option key={index}>{times}</option>));
    }

    return (
        <form className="reservation-form" onSubmit={formik.handleSubmit} aria-labelledby="reservation-form-title">
            <div>
                <label htmlFor="fName">First Name</label>
                <input
                    type="text"
                    id="fName"
                    {...formik.getFieldProps("fName")}
                    aria-required="true"
                    aria-invalid={formik.touched.fName && formik.errors.fName ? "true" : "false"}
                    aria-describedby="fName-error"
                />
                {formik.touched.fName && formik.errors.fName ? (
                    <div id="fName-error" className="error">{formik.errors.fName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="lName">Last Name</label>
                <input
                    type="text"
                    id="lName"
                    {...formik.getFieldProps("lName")}
                    aria-required="true"
                    aria-invalid={formik.touched.lName && formik.errors.lName ? "true" : "false"}
                    aria-describedby="lName-error"
                />
                {formik.touched.lName && formik.errors.lName ? (
                    <div id="lName-error" className="error">{formik.errors.lName}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps("email")}
                    aria-required="true"
                    aria-invalid={formik.touched.email && formik.errors.email ? "true" : "false"}
                    aria-describedby="email-error"
                />
                {formik.touched.email && formik.errors.email ? (
                    <div id="email-error" className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="tel">Phone Number</label>
                <input
                    type="tel"
                    id="tel"
                    {...formik.getFieldProps("tel")}
                    aria-required="true"
                    aria-invalid={formik.touched.tel && formik.errors.tel ? "true" : "false"}
                    aria-describedby="tel-error"
                />
                {formik.touched.tel && formik.errors.tel ? (
                    <div id="tel-error" className="error">{formik.errors.tel}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="people">Number of People</label>
                <input
                    type="number"
                    id="people"
                    {...formik.getFieldProps("people")}
                    aria-required="true"
                    aria-invalid={formik.touched.people && formik.errors.people ? "true" : "false"}
                    aria-describedby="people-error"
                />
                {formik.touched.people && formik.errors.people ? (
                    <div id="people-error" className="error">{formik.errors.people}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="date">Select Date</label>
                <input
                    type="date"
                    id="date"
                    value={formik.values.date}
                    onChange={handleDateChange}
                    aria-required="true"
                    aria-invalid={formik.touched.date && formik.errors.date ? "true" : "false"}
                    aria-describedby="date-error"
                />
                {formik.touched.date && formik.errors.date ? (
                    <div id="date-error" className="error">{formik.errors.date}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="time">Select Time</label>
                <select
                    id="time"
                    {...formik.getFieldProps("time")}
                    aria-required="true"
                    aria-invalid={formik.touched.time && formik.errors.time ? "true" : "false"}
                    aria-describedby="time-error"
                >
                    <option value="" label="Select time" />
                    {finalTime}
                </select>
                {formik.touched.time && formik.errors.time ? (
                    <div id="time-error" className="error">{formik.errors.time}</div>
                ) : null}
            </div>

            <div>
                <label htmlFor="occasion">Occasion</label>
                <select
                    id="occasion"
                    {...formik.getFieldProps("occasion")}
                >
                    <option value="" label="None" />
                    <option value="Birthday" label="Birthday" />
                    <option value="Anniversary" label="Anniversary" />
                    <option value="Engagement" label="Engagement" />
                    <option value="Other" label="Other" />
                </select>
            </div>

            <div>
                <label htmlFor="preferences">Seating Preferences</label>
                <select
                    id="preferences"
                    {...formik.getFieldProps("preferences")}
                >
                    <option value="" label="None" />
                    <option value="Indoors" label="Indoors" />
                    <option value="Outdoor (Patio)" label="Outdoor (Patio)" />
                    <option value="Outdoor (Sidewalk)" label="Outdoor (Sidewalk)" />
                </select>
            </div>

            <button type="submit" className="btn btn-submit">
                Make Your Reservation
            </button>
        </form>
    );
};

export default ReservationForm;