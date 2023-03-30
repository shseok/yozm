import axios, { isAxiosError } from 'axios';
import { CreatePost, EditPost, HotPost, Post } from '@/common/types';

// export const API_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
// export const API_TEST_URL = import.meta.env.VITE_APP_TEST_URL;
// export const APP_TEST2_URL = import.meta.env.VITE_APP_TEST_URL;

// get
export const getHotPosts = async (): Promise<HotPost[] | null> => {
  try {
    const response = await axios.get<HotPost[]>(`/api/postList`);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPost = async (id: string): Promise<Post> => {
  try {
    const response = await axios.get<Post>(`/api/detail/${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error('Axios Error with Message: ' + error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export const getCategoryPosts = async (category: string): Promise<Post[]> => {
  try {
    const response = await axios.get(`/api/categoryDataSelect/${category}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error('Axios Error with Message: ' + error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

// get 변경 요청
export const getSearchedResult = async (word: string): Promise<Post[]> => {
  console.log(word);
  try {
    // const response = await axios.get('/api/search', {
    //   params: {
    //     search: word,
    //   },
    // });
    const response = await axios.post('/api/search', null, {
      params: {
        search: word,
      },
    });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error('Axios Error with Message: ' + error.message);
    } else {
      throw new Error(String(error));
    }
  }
};
// post
export const sendFormData = async (formData: FormData): Promise<string | null> => {
  try {
    const response = await axios.post(`/api/imageUpload`, formData);
    return '/api' + response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createPost = async (data: CreatePost) => {
  try {
    // console.log('create', data);
    await axios.post(`/api/insert`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
//patch
export const updatePost = async (id: number, data: EditPost) => {
  try {
    // console.log('update', data);
    await axios.patch(`/api/update/${id}`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

//delete
export const deletePost = async (postId: number) => {
  // home navigate할때 남아있는 있을 때는 가끔 있지만 해당 에러 원인 파악하기
  try {
    await axios.delete(`/api/delete/${postId}`);
  } catch (error) {
    console.log(error);
    return null;
  }
};
// export async function createUser(user) {
//   const response = await fetch(`${API_BASE_URL}/users`, {
//     method: 'POST',
//     body: JSON.stringify(user),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
//   return response.json();
// }