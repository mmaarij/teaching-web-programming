import React, { Component } from "react"
import { TestAPI } from "./apis" // see below
// this is what data inside apis.js looks like
// export const TestAPI = "https://api.github.com/users/mmaarij"
import axios from 'axios'



class GitUserData extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: undefined // set user as undefined in constructor
        }
    }

    // this (componentWillMount) triggers when item is about to render for the first time
    componentWillMount = () => {
        axios.get(TestAPI)
        .then(({ data }) => {
            this.setState({userData: data})
        })
        .catch(({ response }) => {
            // if error then catch it
            if(response.status == 404)
                this.setState({status: response.data.message})
        })
    }
      

    render = () => {
        return (
            <div>
                {/* if user exists */}
                {this.state.userData ?
                    <div>
                        <img src = {this.state.userData.avatar_url} />
                        <p>Name: {this.state.userData.name}</p>
                        <hr/>
                    </div>
                    // else show loading
                    : <div>Loading...</div>
                }
            </div>
        )
    }
}
export default GitUserData

    // *** this is what the returned data above looks like ***
    // {
    //     "login": "mmaarij",
    //     "id": 84127728,
    //     "node_id": "MDQ6VXNlcjg0MTI3NzI4",
    //     "avatar_url": "https://avatars.githubusercontent.com/u/84127728?v=4",
    //... etc etc
    //     "gravatar_id": "",
    //     "url": "https://api.github.com/users/mmaarij",
    //     "html_url": "https://github.com/mmaarij",
    //     "followers_url": "https://api.github.com/users/mmaarij/followers",
    //     "following_url": "https://api.github.com/users/mmaarij/following{/other_user}",
    //     "gists_url": "https://api.github.com/users/mmaarij/gists{/gist_id}",
    //     "starred_url": "https://api.github.com/users/mmaarij/starred{/owner}{/repo}",
    //     "subscriptions_url": "https://api.github.com/users/mmaarij/subscriptions",
    //     "organizations_url": "https://api.github.com/users/mmaarij/orgs",
    //     "repos_url": "https://api.github.com/users/mmaarij/repos",
    //     "events_url": "https://api.github.com/users/mmaarij/events{/privacy}",
    //     "received_events_url": "https://api.github.com/users/mmaarij/received_events",
    //     "type": "User",
    //     "site_admin": false,
    //     "name": "Muhammad Maarij",
    //     "company": null,
    //     "blog": "",
    //     "location": "Lahore, Pakistan",
    //     "email": null,
    //     "hireable": null,
    //     "bio": "Student at FAST National University Lahore.",
    //     "twitter_username": null,
    //     "public_repos": 1,
    //     "public_gists": 0,
    //     "followers": 1,
    //     "following": 0,
    //     "created_at": "2021-05-13T09:46:28Z",
    //     "updated_at": "2022-03-14T20:34:11Z"
    //   }