import  {Link as CustomRouter}  from "react-router-dom"
import React from "react"

import { Link} from "@mui/material"
 const CustomLink = ({to, children, ...props})=>{
    return (
        <>
        
        <Link
                variant="button"
                color="primary"
                sx={{ my: 1, mx: 1.5, textDecoration:'none', color:'white' }}
                underline="none"
            >
                
            <CustomRouter to={to}{...props}>{children}</CustomRouter>


        
        </Link>
        
        </>
    )}

    export default CustomLink