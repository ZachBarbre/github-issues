import React, { Component } from 'react';
import './IssueList.css'

class IssueList extends Component {
    state = {
        issueArray: []
    }

    getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    async componentDidMount(){
        const issues = await this.getData('https://api.github.com/repos/facebook/create-react-app/issues');
        this.setState(
            {issueArray: issues}
        )
    }

    render() {
        const { issueArray } = this.state;

        return(
            <div className='issueList'>
                {issueArray.length > 0 ? 
                issueArray.map(issue => 
                    <div className='issueCard' key={issue.id}>
                        <h2>{issue.title}</h2>
                        <a href={`/issue/${issue.number}`} className='link'>See Issue Details</a>
                    </div>
                )
                : <p>Loading Data</p>}
            </div>
        )
    }
}

export default IssueList;