// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, matchStatus, competingTeamLogo, result} = matchDetails
  console.log(competingTeam)
  const matchStatusClassName = matchStatus === 'Won' ? 'green' : 'red'
  const bigImagesList = ['Kolkata Knight Riders', 'Royal Challengers Bangalore']
  const logoClassName = bigImagesList.includes(competingTeam)
    ? 'big-image-logo'
    : 'recent-match-competing-team-logo'
  return (
    <li className="match-card-item">
      <div className="recent-match-details-container">
        <div className="logo-container">
          <img
            src={competingTeamLogo}
            alt={`competing team ${competingTeam}`}
            className={logoClassName}
          />
        </div>

        <p className="recent-match-competing-team">{competingTeam}</p>
        <p className="recent-match-results">{result}</p>
        <p className={matchStatusClassName}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
