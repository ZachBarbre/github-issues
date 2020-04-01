import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import getData from '../utls/getData';
import './IssueDetail.css'

const IssueDetail = (props) => {
    const [issue, SetIssue] = useState('');
   
    useEffect( () => {
        const getIssue = async () => {
            const { issue_number } = props.match.params;
            const issueData = await getData(
                `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
                );
            SetIssue(issueData);
        }
        getIssue()
    }, [props.match.params]);

    return(
        <div className='wrapper'>
            <div className='issueCard'>
                <h2>{issue.title}</h2>
                <a href={issue.html_url} className='link'>Link to Issue on GitHub</a>
                <div className='issueBody'>
                    <ReactMarkdown source={issue.body} escapeHtml={false} />
                </div>
            </div>
            <a href="/">Back to Issue List</a>
        </div>
    )
}

export default IssueDetail;