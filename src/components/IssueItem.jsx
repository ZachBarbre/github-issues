import React from 'react';
import './IssueItem.css'

function Issue(props) {
    return (
        <div className='issueCard'>
            <h3>{props.title}</h3>
            <a href={props.url}>Link to Issue on GitHub</a>
            <p>{props.body}</p>
        </div>
    );
}

export default Issue;

