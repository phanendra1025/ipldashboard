// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerImageUrl: '',
    latestMatchDetails: {},
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTheTeamMatchList()
  }

  getTheTeamMatchList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const data = await response.json()
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData
    const formattedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    const formattedRecentMatchesList = recentMatches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerImageUrl: teamBannerUrl,
      latestMatchDetails: formattedLatestMatchDetails,
      recentMatchesList: formattedRecentMatchesList,
      isLoading: false,
    })
  }

  render() {
    const {
      teamBannerImageUrl,
      latestMatchDetails,
      recentMatchesList,
      isLoading,
    } = this.state
    return (
      <>
        {isLoading ? (
          <div>
            {' '}
            <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
          </div>
        ) : (
          <div className="team-matches-container">
            <img
              src={teamBannerImageUrl}
              className="team-banner-image"
              alt="team banner"
            />
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-matches-list-container">
              {recentMatchesList.map(eachMatch => (
                <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
              ))}
            </ul>
          </div>
        )}{' '}
      </>
    )
  }
}

export default TeamMatches
