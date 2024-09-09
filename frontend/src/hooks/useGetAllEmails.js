import { useEffect } from "react"
import axios from "axios"
import { useDispatch } from "react-redux";
import { setEmails } from "../redux/appSlice";



const useGetAllEmails = () => {

const dispatch = useDispatch();
    useEffect(() =>{
        const fetchEmails = async () =>{
            try {

                const res = await axios.get("http://localhost:5000/api/v1/email/getallemails", {
                    withCredentials: true
                });
                dispatch(setEmails(res.data.emails));
                
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchEmails();
    },[]);
};

export default useGetAllEmails;