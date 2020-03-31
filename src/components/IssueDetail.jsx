import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import getData from '../utls/getData';
import './IssueItem.css'

class IssueDetail extends Component {
    state = {
        issue: ''
    }

    // getData = async (url) => {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     return data;
    // }

    async componentDidMount(){
        const { issue_number } = this.props.match.params;
        const issue = await getData(
            `https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`
            );
        this.setState(
            { issue }
        );
    }

    render() {
        const { issue } = this.state;
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
}

export default IssueDetail;