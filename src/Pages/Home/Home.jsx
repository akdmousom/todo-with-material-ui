import { Box, Container, TextField, Typography } from "@mui/material";
import { AddButton } from "../../Components/CustomComponents/CustomButton/CustomButton";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Home = () => {
    const [addNote, setAddNote] = useState([]);

    const {
        register,
        handleSubmit,
        reset

    } = useForm();

    const onSubmit = (data) => {

        const Note = data?.Note;
        
        if (Note == []) {

            return (toast.error('Input Some Value'))
            
        }

        setAddNote((prev)=>[...prev, Note])
        reset()
        toast.success('Note Is Added')
        

    }

    console.log(addNote);



    return (
        <Container>
            <Box sx={{ display: { xs: 'block', md: 'block flex' }, justifyContent: 'center', justifyItems:'center', mt:{xs:4}, mx:{xs:'auto'}, flexFlow:{xs:'column'} }}>


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

            <Box sx={{ display:'flex', flexFlow:'column'}}>
                {
                
                addNote.map((item,idx) => {
                    return (
                    
                             <Box key={idx}>

                                <Typography>({idx + 1}) {item}</Typography>

                             </Box>
                     
                    )
                })

                }
                </Box>
        
        </Container>
    );
};

export default Home;