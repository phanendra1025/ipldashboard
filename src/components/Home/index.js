// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {
    iplTeamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheiplTeamsList()
  }

  getTheiplTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const iplTeams = data.teams
    console.log(iplTeams)
    const formattedData = iplTeams.map(eachTeam => ({
      name: eachTeam.name,
      id: eachTeam.id,
      teamImageUrl: eachTeam.team_image_url,
    }))

    console.log(formattedData)
    this.setState({iplTeamsList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, iplTeamsList} = this.state
    console.log(iplTeamsList)
    return (
      <div className="container">
        {isLoading ? (
          <div>
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <>
            {' '}
            <div className="app-name-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <ul className="team-cards-container">
              {iplTeamsList.map(eachTeam => (
                <TeamCard teamCardDetails={eachTeam} key={eachTeam.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
