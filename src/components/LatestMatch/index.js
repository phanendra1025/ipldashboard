// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails
  return (
    <div className="latest-match-container">
      <p className="latest-matches-text">Latest Matches</p>
      <div className="latest-match-details-container">
        <div className="competing-team-details-container">
          <p className="competing-team-name">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <div className="match-details-container">
          <p className="first-innings-heading">First Innings</p>
          <p className="first-innings">{firstInnings}</p>
          <p className="second-innings-heading">Second Innings</p>
          <p className="second-innings">{secondInnings}</p>
          <p className="man-of-the-match-heading">Man Of The Match</p>
          <p className="man-of-the-match">{manOfTheMatch}</p>
          <p className="umpires-heading">Umpires</p>
          <p className="umpires">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
