import { Section, StatsItem, DescriptinProfile,Img, ParagraphProfile, StatsList, StatsEl } from "./Profile.styled"


export const Profile = ( {items : {username, tag, location, avatar, stats : {followers, views, likes}}}) => {

    return <Section className="profile">
    <DescriptinProfile className="description">
      <Img
        src={avatar}
        alt="User avatar"
        className="avatar"
        height={250}
      />
      <ParagraphProfile className="name">{username}</ParagraphProfile>
      <ParagraphProfile className="tag">@{tag}</ParagraphProfile>
      <ParagraphProfile className="location">{location}</ParagraphProfile>
    </DescriptinProfile>
  
    <StatsList> 
      <StatsItem>
        <StatsEl >Followers</StatsEl>
        <StatsEl >{followers}</StatsEl>
      </StatsItem>
      <StatsItem>
        <StatsEl >Views</StatsEl>
        <StatsEl >{views}</StatsEl>
      </StatsItem>
      <StatsItem>
        <StatsEl >Likes</StatsEl>
        <StatsEl >{likes}</StatsEl>
      </StatsItem>
    </StatsList>
  </Section>

}