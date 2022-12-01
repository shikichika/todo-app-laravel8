import axios from "axios";
import { useMutation, useQueryClient} from "@tanstack/react-query";




const useUpdateToDoMutateTask = () => {

    const queryClient = useQueryClient();
    const updateToDoMutation = useMutation((toDo) => axios.put("/api/todos/" + toDo.id, { title: toDo.title }),
        {
            onMutate: async (toDo) => {

                //実行中の取得処理をキャンセル
                await queryClient.cancelQueries({ queryKey: ["toDoList"], exact: true });
                //ToDoリストを取得する
                const previousToDoList = queryClient.getQueriesData("toDoList");

                //ToDoリストのキャッシュを更新する
                queryClient.setQueriesData("toDoList", (oldToDoList) =>
                    oldToDoList.map((oldToDo) => {
                        if (oldToDo.id == toDo.id) {
                            return {
                                ...oldToDo,
                                title: toDo.title,
                            };
                        }
                        return oldToDo;
                    })

                );
                return { previousToDoList };
            },

            onSettled: () => {
                queryClient.invalidateQueries({ queryKey: ['toDoList'] });
            }
        });

    return { updateToDoMutation };
}

export default useUpdateToDoMutateTask;
