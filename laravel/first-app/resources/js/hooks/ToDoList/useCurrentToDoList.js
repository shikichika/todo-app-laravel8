import {useQueryClient} from "@tanstack/react-query";


const useCurrentToDoList = () =>{
    const queryClient = useQueryClient();
    return queryClient.getQueriesData("toDoList");
}


export default useCurrentToDoList;

