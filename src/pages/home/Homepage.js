import React from 'react';
import Team from './Team';
import Individual from './Individual';
import ContactUs from './ContactUs';

function Homepage(props) {
    return (
        <div>
            <Team />
            <Individual />
            <ContactUs />
        </div>
    );
}

export default Homepage;