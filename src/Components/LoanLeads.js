import React, { useEffect, useState } from 'react';
import ConstantData from '../ConstantData.json';
import LeadInfo from './LeadInfo';

function LoanLeads(props) {

    const [loanLeads,setLoanLeads] = useState(ConstantData);

    return (
        <table border="true">
            <th>LoanAmount</th>
            <th>LeadSource</th>
            <th>CommunicationMode</th>
            <th>Status</th>
            <th>Action</th>
            <tbody>
                {
                    loanLeads.map(loanLead => 
                        <LeadInfo lead={loanLead} />
                    )
                }
            </tbody>
        </table>
        
    );
}

export default LoanLeads;