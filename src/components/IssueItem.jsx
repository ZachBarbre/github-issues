import React from 'react';
import './IssueItem.css'
import ReactMarkdown from 'react-markdown/with-html';

function Issue(props) {
    return (
        <div className='issueCard'>
            <h2>{props.title}</h2>
            <a href={props.url} className='link'>Link to Issue on GitHub</a>
            <div className='issueBody'><ReactMarkdown source={props.body} escapeHtml={false} /></div>
        </div>
    );
}

export default Issue;

