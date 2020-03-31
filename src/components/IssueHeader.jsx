import React from 'react';

const IssueHeader = (props) => {
    const { issue_number } = props.match.params;

    return(
    <h3>Issue Number: {issue_number}</h3>
    )
}

export default IssueHeader;