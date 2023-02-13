import myAxios from '../utils/myAxios';
import  { IUser }  from  '../../../server/src/types'

interface UserListReturn {
    list: IUser ;
}

export async function getUserList() {
    const response = await myAxios.get<UserListReturn>('/users');

    return response.data.list
}