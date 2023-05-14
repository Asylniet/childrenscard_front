import { IComment, ICommentResult } from "@/models/Comment";
import { IUserResult } from "@/models/User";
import { axiosInstance } from "./api";

class UserAPI {
    private axios = axiosInstance('');
    async get(id: number) {
        const response = await this.axios.get<IUserResult>(`userlist/${id}`);
        return response.data;
    }

    async getComments(id: number) {
        const response = await this.axios.get<ICommentResult>(`teacher/${id}`);
        return response.data;
    }
    private postAxios = axiosInstance('', true);
    async rateTeacher(data: IComment) {
        const response = await this.postAxios.post(`rating`, data);
        return response.data;
    }
}

export const userAPI = new UserAPI();