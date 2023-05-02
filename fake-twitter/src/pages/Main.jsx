import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
 
const Main = () => {
    const navigate = useNavigate()
    return ( 

        <>
        <h1>Hello Chatter</h1>
        <Button onClick={() => {
            navigate('/login-page')
        }} variant="contained">Login Page</Button>
        </>
     );
}
 
export default Main;