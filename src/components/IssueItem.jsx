import React from 'react';
import './IssueItem.css'
import ReactMarkdown from 'react-markdown';

function Issue(props) {
    return (
        <div className='issueCard'>
            <h3>{props.title}</h3>
            <a href={props.url}>Link to Issue on GitHub</a>
            <div><ReactMarkdown source={props.body} /></div>
        </div>
    );
}

export default Issue;

