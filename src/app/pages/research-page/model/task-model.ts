import { UserModel } from './user-model';

export interface TaskModel {
	id: number,
	title: string,
	users: Array<UserModel>,
	state: string
}
