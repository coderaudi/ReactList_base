import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import { Button, Form, FormGroup, Label, Input, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, PopoverHeader, PopoverBody } from 'reactstrap';

// 

class NotePad extends Component {

    constructor(props) {
        super(props);

        this.state = {
            note: "sdf",
            noteTitle: "asdfs",
            noteColor: "",
            noteLabel: ["note", "basic"],
            dropdownOpen: false,
            isNotepadOpen: false
        }
    }


    onChageNote = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    onClickDropdown = (e) => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        })
    }

    onAddNote = (e) => {
        console.log(this.state)
    }

    onColorChagne = (e) => {

        this.setState({
            noteColor: e.target.value
        })
    }

    render() {
        return (
            <div style={{ width: "80%", marginLeft: "10%" }}>
                <Card className="noteCard" style={{ background: this.state.noteColor }}>
                    <CardContent>
                        <FormGroup>
                            <Input
                                placeholder="Title"
                                type="text"
                                name="noteTitle"
                                id="noteTitle"
                                value={this.state.noteTitle}
                                onClick={e => this.setState({ isNotepadOpen: true })}
                                onChange={e => this.onChageNote(e.target.name, e.target.value)}

                            />

                            {this.state.isNotepadOpen ? <Input
                                type="textarea"
                                placeholder="Take a note..."
                                name="note"
                                value={this.state.note}
                                id="note"
                                onChange={e => this.onChageNote(e.target.name, e.target.value)}


                            /> : ""}
                        </FormGroup>

{ this.state.isNotepadOpen ?
                       <div>
                       <Dropdown isOpen={this.state.dropdownOpen}
                            toggle={e => this.onClickDropdown()}
                        >
                            <DropdownToggle caret>
                                Color Select
                                 </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem
                                    value="green"
                                    onClick={e => this.onColorChagne(e)}>Green</DropdownItem>
                                <DropdownItem
                                    value="red"
                                    onClick={e => this.onColorChagne(e)}>Red</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>

                        <Button className="btn btn-success"
                            onClick={e => this.onAddNote(e)}>Add Note</Button>
                       </div>
                   : "" }
                    </CardContent>
                    <CardActions>
                        <div style={{ float: "right" }}>
                            {/* <DeleteRoundedIcon onClick={e => this.deleteNote(e, index)} /> */}
                        </div>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default NotePad;