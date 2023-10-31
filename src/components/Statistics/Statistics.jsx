import { StatsContainer, StatsTitle,StatsList, StatsItem, StatsEl } from "./Statistics.styled"
export const Statistics = ({stats, title}) => {

    return (

    <StatsContainer className="statistics">
      <StatsTitle>{title}</StatsTitle>
  
  <StatsList>
  {stats.map(el => (

    <StatsItem style={{
background: `linear-gradient(to top, #5F9EA0 0% ${el.percentage}%, #8FBC8F ${el.percentage}% )`
}} key={el.id}>
      <StatsEl> {el.label}</StatsEl>
      <StatsEl>{el.percentage}%</StatsEl>
    </StatsItem>
))}

  </StatsList>



  </StatsContainer>
    )
}