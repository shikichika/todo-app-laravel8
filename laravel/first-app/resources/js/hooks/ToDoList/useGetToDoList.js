import axios from "axios"
import {useQueryClient} from "@tanstack/react-query";
import {useQuery} from "@tanstack/react-query";

//async は非同期 axiosはAPIから持ってくる
const getToDoList = async () =>{
    const {data} = await axios.get("http://localhost:8000/api/todos");
    return data;
}

//getじゃないと怒られる
const useGetToDoList = () =>{
    const queryClient = useQueryClient();
    const result =  useQuery(["toDoList"], getToDoList, {
        onError:()=>{
            queryClient.setQueryData("toDoList", null);
        }
    });
    return result;

}

export default useGetToDoList;
