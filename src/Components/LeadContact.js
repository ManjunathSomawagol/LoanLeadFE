import React from 'react';

function LeadContact(props) {

    const {contact} = props;

    return (
        
        <fieldset>
            <legend>Contact details</legend>
            <table>
                <tr>
                    <td>Contact Type</td>
                    <td>
                        <input value={contact.ContactType} />
                    </td>
                </tr>
                <tr>
                    <td>Contact Name</td>
                    <td>
                        <input value={contact.ContactName} />
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>
                        <input value={contact.Dob} />
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>
                        <input value={contact.Gender} />
                    </td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>
                        <input value={contact.Email} />
                    </td>
                </tr>
                <tr>
                    <td>ContactNumber</td>
                    <td>
                        <input value={contact.ContactNumber} />
                    </td>
                </tr>
            </table>
        </fieldset>
    );
}

export default LeadContact;