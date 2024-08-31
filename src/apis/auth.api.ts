import { AuthRespon } from '../types/auth.type'
import http from '../utils/http'

export const registerAccount = (body: { email: string; password: string }) => http.post<AuthRespon>('/register', body)
export const loginAccount = (body: { email: string; password: string }) => http.post<AuthRespon>('/login', body)
