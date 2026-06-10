import api from './api';
import { User, Post, Comment, Album, Photo, Todo } from '../types';

export const UserService = {
  getUsers: () => api.get<User[]>('/users'),
  getUser: (id: number) => api.get<User>(`/users/${id}`),
};

export const PostService = {
  getPosts: () => api.get<Post[]>('/posts'),
  getPost: (id: number) => api.get<Post>(`/posts/${id}`),
  getUserPosts: (userId: number) => api.get<Post[]>(`/users/${userId}/posts`),
  createPost: (data: { title: string; body: string; userId: number }) =>
    api.post<Post>('/posts', data),
};

export const CommentService = {
  getPostComments: (postId: number) =>
    api.get<Comment[]>(`/posts/${postId}/comments`),
};

export const AlbumService = {
  getAlbums: () => api.get<Album[]>('/albums'),
  getUserAlbums: (userId: number) =>
    api.get<Album[]>(`/users/${userId}/albums`),
};

export const PhotoService = {
  getAlbumPhotos: (albumId: number) =>
    api.get<Photo[]>(`/albums/${albumId}/photos`),
};

export const TodoService = {
  getTodos: () => api.get<Todo[]>('/todos'),
  getUserTodos: (userId: number) =>
    api.get<Todo[]>(`/users/${userId}/todos`),
};
