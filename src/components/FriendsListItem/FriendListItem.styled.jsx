import styled from '@emotion/styled'


const BgColor = ({online}) => online ?  'green' :  'red';


export const FriendItem = styled.li`
background-color: whitesmoke;
height: 150px;
display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 15px;
width: 650px;
list-style: none;
border: 3px solid rgba(0, 0, 0, 0.4);
box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

`
export const Avatar = styled.img`
display: block;
margin-right: 25px;
border: 3px solid #A9A9A9;
border-radius: 50%;

`
export const ChipOnline = styled.span`
display: block;
width: 30px;
height: 30px;
margin-right: 40px;
margin-left: 5px;
border-radius: 50%;
background-color: ${BgColor};
`