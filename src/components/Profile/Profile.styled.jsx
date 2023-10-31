import styled from '@emotion/styled'

export const Section = styled.div`
border: 3px solid 0 0 5px rgba(0, 0, 0, 0.4);
width: 600px;
border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`

export const DescriptinProfile = styled.div`
display: flex;
flex-direction: column;
margin: auto;
padding: 12px;
background-color: #F5F5DC;
`
export const Img = styled.img`
width: 270px;
border: 1px solid #808080;
border-radius: 50%;
background-color: #F0FFFF;
margin: 10px 140px;

`
export const ParagraphProfile = styled.p`
margin: 12px;
font-family: Arial, Helvetica, sans-serif;
:nth-child(2) {
    font-weight: 600;
}
text-align: center;
`

export const StatsList = styled.ul`
display: flex;
padding: 0px;
margin: 0;

`


export const StatsItem = styled.li`
list-style: none;
display: flex;
align-items: center;
width: calc(100% / 3);
border: 2px solid #808080;

display: flex;
flex-direction: column;
padding: 24px;
background-color: #FFF5EE;
:first-child {
    border-left: none;
}
:last-child{
    border-right: none;
}
border-bottom: none;
`

export const StatsEl = styled.span`

`