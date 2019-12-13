import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            left: true
        }
    }

    //  toggleDrawer = (side, open) => event => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }

    //     setState({ ...state, [side]: open });
    //   };

    render() {

        const sideList = side => (
            <div

                role="presentation"
            //   onClick={toggleDrawer(side, false)}
            //   onKeyDown={toggleDrawer(side, false)}
            >
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );


        return (
            <div >
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon
                                onClick={e => this.setState({ left: !this.state.left })}
                            />
                        </IconButton>
                        <Typography variant="h6">
                            Fundoo_ satya
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                {/* the drawwer code */}

                <div>



                    <Drawer
                       
                        variant="persistent"
                        open={this.state.left}
                        onClose={e => this.setState({ left: false })}
                    >
                        <div  style={{ width: "250px" , marginTop : "70px" }}> 
                        {sideList('left')}
                        </div>
                       
              </Drawer>

                </div>

            </div>
        );
    }
}

export default Header;