import React, { Component } from 'react';
import Issue from './IssueItem.jsx';
import './IssueList.css'

class IssueList extends Component {
    state = {
        issueArray: []
    }

    getData = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
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
                issueArray.map((issue, index) => <Issue key={index} url={issue.url} title={issue.title} body={issue.body}/>
                )
                : <p>Loading Data</p>}
            </div>
        )
    }
}

export default IssueList;