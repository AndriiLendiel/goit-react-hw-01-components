import styled from '@emotion/styled'

export const StatsContainer = styled.section`
background: #8FBC8F;
margin-top: 12px;
border: 3px solid 0 0 5px rgba(0, 0, 0, 0.4);
width: 600px;
border-radius: 15px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

  overflow: hidden;
`
export const StatsTitle = styled.h2`
text-align: center;
`
export const StatsList = styled.ul`
margin: 0;
display: flex;
padding: 0;
`
export const  StatsItem = styled.li`

list-style: none;
width: calc(100% / 5);
font-size: 32px;
display: flex;
flex-direction: column;
align-items: center;

:not(:last-child) {
    border-right: 2px solid #808080 ;
}
border-top:  2px solid #808080;
padding: 30px 0px;
`
export const StatsEl = styled.span`
:last-child{
    font-weight: 600;
    font-size: 42px;

}



`

