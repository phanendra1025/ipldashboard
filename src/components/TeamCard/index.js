// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {name, id, teamImageUrl} = teamCardDetails
  return (
    <Link to={`/team-matches/${id}`} className="team-card-item">
      <li className="team-container">
        <img src={teamImageUrl} alt={`${name}`} className="team-image" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
