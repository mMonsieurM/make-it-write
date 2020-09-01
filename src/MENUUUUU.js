import React, { Component } from 'react';
import styled from 'styled-components'

const MenuTop = styled.div`
  font-size: clamp(.5rem, 12px, 2rem);
  
  
  display: flex;
  
  align-items: baseline;

  background: rgb(200,200,200);
background: linear-gradient(180deg, rgba(200,200,200,1) 0%, rgba(200,200,200,0) 100%);

  width: 100%;
    
    padding: 1vh 3vw;

    h1{
        font-size: clamp(.5rem, 24px, 2rem);
        color: #373737;
    }
`;


class Menu extends Component {
    render() {
        return (
            <MenuTop>
                <h1>Write.app <small>v.0.1</small></h1>
            </MenuTop>
            
        );
    }
}

export default Menu;