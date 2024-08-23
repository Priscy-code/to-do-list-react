import {create} from 'zustand'
import useMessageStore from './useMessageStore'

const useTaskStore = create ((set) => ({
    tasks: [],
    addTask: (task) => {
        set ((state) => ({task: [...state.tasks, task]}))
    }, 
    removeTask: (id) => {
        set((set) => ({
            tasks: state.tasks.map(task => 
                task.id ===id ? { ...task, completed: !task.completed } : task
            )
        }));
    }, 
    toggleTask: (id) => {
        set((state) => ({
            tasks: state.tasks.map(task => 
                task.id === id ? { ...task, completed: !task.completed} :task
            )
        }))
    },
    fetchTask: async () => {
        try{
            const response =await fetch ('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json(); 
            set({ tasks: data.slice(0, 5)});
            useMessageStore.getState().setMessage('Tasks fetched sucessfully', 'sucess');
        } catch(error) {
            console.error ('Error fetching tasks:', error);
            useMessageStore.getState().setMessage('Error fetching tasks', 'error')
        }
    }
}))

export default useTaskStore