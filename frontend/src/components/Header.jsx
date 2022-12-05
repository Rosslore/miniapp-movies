import styled from 'styled-components';

const StyledHeader = styled.span`
width: 100%;
cursor: pointer;
position: flex;
display: flex;
justify-content: center;
text-transform: uppercase;
background-color: #39445a;
font-family: "Montserrat", sans-serif;
font-size: 5vw;
padding-bottom: 10px;
box-shadow: 0px 1px 5px black;
color: white;
z-index: 100;

`

const Header = () => {
    return (

        <StyledHeader>
         🎥 Suprabuster 🎥

        </StyledHeader>
        
        // 
    )
}

export default Header;