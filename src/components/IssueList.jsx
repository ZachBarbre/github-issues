import React, { useState, useEffect } from 'react';
import getData from '../utls/getData';
import './IssueList.css'

const IssueList = () => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        const getIssues = async () => {
            const issues = await getData('https://api.github.com/repos/facebook/create-react-app/issues');
            setIssues(issues);
        }
    
        getIssues();
    }, [])

    return (
        <div className='issueList'>
                {issues.map(issue => 
                    <div className='issueCard' key={issue.id}>
                        <h2>{issue.title}</h2>
                        <a href={`/issue/${issue.number}`} className='link'>See Issue Details</a>
                    </div>
                )}
            </div>
    )
}

export default IssueList;