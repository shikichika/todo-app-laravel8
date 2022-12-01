import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";



const useUpdateDetailMutateTask = () => {
    const queryClient = useQueryClient()
    const updateDetailMutation = useMutation((detail) => 
    axios.put("/api/detail/" + detail.id, {
         name: detail.name,
         is_completed: detail.is_completed,
        }), {
            onMutate: async (detail)=>{
                await queryClient.cancelQueries("toDoList");
                const previousToDoList = queryClient.getQueriesData("toDoList");
                queryClient.setQueriesData("toDoList", (oldToDoList)=>
                oldToDoList.map((oldToDo)=>{
                    if(oldToDo.id == detail.to_do_id){
                        let newToDoDetails = [];
                        oldToDo.detail.map((oldToDoDetail)=>{
                            if(oldToDoDetail.id == detail.id){
                                newToDoDetails.push({
                                    ...oldToDoDetail,
                                    name: detail.name, 
                                    is_completed: detail.is_completed,
                                });
                            }else{
                                newToDoDetails.push(oldToDoDetail);
                            }
                        });
                        oldToDo.detail = newToDoDetails;
                    }
                    return oldToDo;
                })
                );
                return {previousToDoList};
            },
            onSettled:()=>{
                queryClient.invalidateQueries("toDoList");
            }
        }); 
    return { updateDetailMutation };
}

export default useUpdateDetailMutateTask;
