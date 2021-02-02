import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function LeadInfo(props) {

    const {lead} = props;

    const [leadInfo,setLeadInfo] = useState();

    useEffect(()=>{
        // console.log("This is useeffect")
        // axios.get('http://localhost:5000/getlead/1').then(res=>{
        //     console.log("response => ",res);
        // })

    })

    return (
        <tr>
            <td> {lead.LoanAmount} </td>
            <td> {lead.LeadSource} </td>
            <td> {lead.CommunicationMode} </td>
            <td> {lead.Status} </td>
            <td>
                <Link to={{pathname:`/loanlead`,
                    lead:{lead}
                    }}
                >
                    Edit
                </Link>{' '}
                {/* <a href="#">Edit</a>{' '} */}
                <a href="#">Delete</a>
            </td>
            
        </tr>
    );
}

export default LeadInfo;