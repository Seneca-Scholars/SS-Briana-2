import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export const NavBar = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Phineas', 'Ferb', 'Doofenshmirtz', 'Major Monogram'].map((text, index) => (
            <Link
              to={`/${text}`}
              style={ {textDecoration:'none', color:'black'} }>
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    );

    return (
            <ul className='nav-list'>
                <div className='logo'>
                    <li><Link to="/secretlair"><img src="perry.webp"></img></Link></li>
                </div>

                <div className='nav'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/maps">Maps</Link></li>
                <li><Link to="/table">Table</Link></li>
                <li>
                    <Button onClick={toggleDrawer(true)} className="nav-btn" variant="contained" color='warning'>Contact</Button>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                    </Drawer>
                </li>
                </div>

            </ul>
    )
}
