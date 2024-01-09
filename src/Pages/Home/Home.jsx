import { Box, Container, TextField, Typography } from "@mui/material";
import { AddButton } from "../../Components/CustomComponents/CustomButton/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Home = () => {
    const [addNote, setAddNote] = useState([])

    const {
        register,
        handleSubmit,
        
      } = useForm();

      const onSubmit = (data) => {

        const Note = data?.Note;

        const prevNote = [...addNote]
        const newNote = [...prevNote,Note]
        setAddNote([newNote])
       
      }

      console.log(addNote);

  

    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>


                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        id="outlined-controlled"
                        label="Add Note"
                        name="addNote"
                        {...register('Note')}

                    />

                    <AddButton type="submit">Add Note</AddButton>

                </form>


            </Box>

            <Box sx={{display:'flex', flexFlow:'column'}}>
                {addNote.map((item,idx) => {
                    return (
                    
                             <><Typography key={idx}>{item}</Typography><br /></>
                     
                    )
                })}
            </Box>
        </Container>
    );
};

export default Home;