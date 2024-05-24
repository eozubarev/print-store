import BaseApiService from "../BaseApiService"
import type {Todo} from "~/types/todo";

class TodoService extends BaseApiService {

    private readonly className: string = 'TodoService';

    async getTodo(id: number) {
        try {
            const todo = await this.api.get(`todos/${id}`).json();
            return todo as Todo
        } catch (error) {
            console.log(`When fetching ${this.className} | Error: ${error}`)
        }
    }

}

export default new TodoService