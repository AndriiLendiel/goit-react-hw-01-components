import styled from '@emotion/styled'

export const Table = styled.table`

font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 24px;
  width: 940px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
  background: #252F48;
  margin: 10px;
  tr:hover td {
  text-decoration: underline;
  color: black;
  background-color: whitesmoke;
  transform: scale(1.2);
  cursor: pointer;
}
`

export const Thead = styled.th`
  color: #EDB749;
  border-bottom: 1px solid #37B5A5;
  padding: 12px 17px;
  display: contents;
  font-size: 36px

`

export const TableTd = styled.td`
  color: #CAD4D6;
  border-bottom: 1px solid #37B5A5;
  border-right:1px solid #37B5A5;
  padding: 7px 17px;
`

export const TableTr = styled.tr`
border-bottom: 1px solid #37B5A5;
`