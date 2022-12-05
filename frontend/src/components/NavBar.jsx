import React, { useState } from 'react';
import { BottomNavigation } from '@mui/material';
import { BottomNavigationAction } from '@mui/material';
import Search from '@mui/icons-material/Search';
import Home from '@mui/icons-material/Home';
import Favorite from '@mui/icons-material/Favorite';
import { useHistory, Link } from 'react-router-dom';
import Box from '@mui/material/Box';

function NavBar() {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ flexgrow: 2 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction
                    component={Link}
                    to="/"
                    label="Home"
                    icon={<Home />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/search"
                    label="Search"
                    icon={<Search />}
                />
                <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            </BottomNavigation>
        </Box>
    );
}


export default NavBar;