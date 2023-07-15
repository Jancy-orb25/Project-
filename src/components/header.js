import HomeIcon from '@mui/icons-material/Home';
import { Badge } from "@mui/material"

function Header(){
  return(
    <div>
        <Badge badgeContent={4} color="primary" style={{marginTop:"10px"}}>
        <HomeIcon style={{color:"grey",fontSize:"4rem",marginLeft:"80%"}}/>
        </Badge>
    </div>
  )
}
export default Header