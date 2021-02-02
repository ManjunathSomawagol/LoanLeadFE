import React from 'react';
import LeadContact from './LeadContact';

function IndividualLead(props) {

    const lead = props.location.lead;

    console.log("lead => ",lead.lead)

    return (
        <>
        <form>
            <table>
                <tr>
                    <td>Loan Amount</td>
                    <td>
                        <input value={lead.lead.LoanAmount} />
                    </td>
                </tr>
                <tr>
                    <td>Lead Source</td>
                    <td>
                        <input value={lead.lead.LeadSource} />
                    </td>
                </tr>
                <tr>
                    <td>Communication Mode</td>
                    <td>
                        <input value={lead.lead.CommunicationMode} />
                    </td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>
                        <input value={lead.lead.Status} />
                    </td>
                </tr>
            </table>
        </form>
        {lead.lead.ContactDetails.map(cd => 
            <LeadContact contact={cd} />
        )}
        </>
    );
}

export default IndividualLead;