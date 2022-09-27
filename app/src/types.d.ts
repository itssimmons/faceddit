export interface GiphyParams {
  q: string
}

export interface LoginResponse implements ApiResponse<User> {
  token: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
}

export interface User {
  id: number
  name: string
  email: string
  photo: string
  createdAt: Date
}

export interface SelectedMedia {
  preview: string
  file: File | null
}