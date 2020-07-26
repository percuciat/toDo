import React from "react";
import './app-header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'

const Header = styled.header `
   display: flex;
    align-items: flex-end;
   justify-content: space-between;
   .header-title {
     font-size: 26px;
     cursor: pointer;
     :hover{
        color: orange;
     }
   }
   .header-subtitle {
      font-size: 1.2rem;
      color: ${props => props.colored ? 'black' : 'red'}
      }
`;



const AppHeader = ({allPosts, liked}) => {
    const grammarNamePost = () => {
        const lastLetter = allPosts.toString().split('');
        if(lastLetter[lastLetter.length - 1] === '1' && allPosts !== 11){
            return 'запись'
        }
        else if(lastLetter[lastLetter.length - 1] >= 2
            && lastLetter[lastLetter.length - 1] <= 4
            && allPosts !== 12
            && allPosts !== 13
            && allPosts !== 14){
            return 'записи'
        } else {
            return 'записей'
        }
    };
    return (
            <Header colored>
                <h1 className="header-title">Maksim Semenov</h1>
                <h2 className="header-subtitle">{allPosts} {grammarNamePost()}, из них понравилось {liked}</h2>
            </Header>
    )
};

export default AppHeader;