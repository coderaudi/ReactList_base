import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


import NotePad from "../components/Note";

class AllNote extends Component {

    constructor(props) {
        super();

        this.state = {
            allNotes: [{ title: "audi ", note: "testnote - o all sdof " }],
            note: "",
            noteTitle: ""
        }
    }

    onChageNote = (name, value) => {

        if (value) {
            this.setState({
                [name]: value
            })
        }
    }

    addNote = (e) => {
        if (this.state.note) {
            let vm = this.state;

            let oldNotes = vm.allNotes;

            let noteObj = {
                title: vm.noteTitle,
                note: vm.note
            }

            oldNotes.push(noteObj);



            if (oldNotes) {
                this.setState({
                    allNotes: oldNotes,
                    note: "",
                    noteTitle: ""
                })
            }
        }
    }


    deleteNote = (e, i) => {
        let mylist = this.state.allNotes;
        mylist.splice(i, 1);

        this.setState({
            allNotes: mylist
        })
    }

    displayNoteList = () => {
        let mylist = this.state.allNotes;
        let resultList = mylist.map((obj, index) => {
            return (
                <div key={index} style={{ width: "250px" }}>

                    <div style={{ width: "200px" , margin : "5px" }}>
                        <Card className="noteCard">
                            <CardContent>
                                <Typography variant="h5" component="h2">
                                    {obj.title}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {obj.note}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div style={{ float: "right" }}>
                                    <DeleteRoundedIcon onClick={e => this.deleteNote(e, index)} />
                                </div>
                            </CardActions>
                        </Card>

                    </div>


                </div>
            )
        })

        return resultList;
    }


    render() {



        return (
            <div>
               <NotePad />

              <hr />
               <div>
               {this.displayNoteList()}
               </div>

            </div>
        )
    }
}

export default AllNote;