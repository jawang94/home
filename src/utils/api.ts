const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `${process.env.DATABASE_ENDPOINT}/api`;

const methods = {
  async get(endpoint: string, token?: any) {
    const options = {
      method: 'GET',
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) throw Error(json.message);

    return json;
  },

  async post(
    endpoint: string,
    body: { username: any; password: any },
    token?: any
  ) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 422) {
        json.errors.forEach((error: { param: any; msg: any }) => {
          throw Error(`${error.param} ${error.msg}`);
        });
      }

      throw Error(json.message);
    }

    return json;
  },

  async delete(endpoint: string, token: any) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 401) throw Error('unauthorized');
      throw Error(json.message);
    }

    return json;
  },
};

export async function login(username: any, password: any) {
  const json = await methods.post('login', { username, password });
  return json.token;
}

export async function signup(username: any, password: any) {
  const json = await methods.post('register', { username, password });
  return json.token;
}

export async function getPosts(category: string) {
  const response = await methods.get(`posts/${category}`);
  return response;
}

export async function getProfile(username: any) {
  const response = methods.get(`user/${username}`);
  return response;
}

export async function getPost(id: any) {
  const response = methods.get(`post/${id}`);
  return response;
}

export async function createPost(body: any, token: null | undefined) {
  const response = methods.post('posts', body, token);
  return response;
}

export async function deletePost(id: any, token: null | undefined) {
  const response = methods.delete(`post/${id}`, token);
  return response;
}

export async function createComment(
  post: any,
  comment: any,
  token: null | undefined
) {
  const response = methods.post(`post/${post}`, comment, token);
  return response;
}

export async function deleteComment(
  post: any,
  comment: any,
  token: null | undefined
) {
  const response = methods.delete(`post/${post}/${comment}`, token);
  return response;
}

export async function castVote(
  id: any,
  vote: string | number,
  token: null | undefined
) {
  const voteTypes: any = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote',
  };

  const voteType: any = voteTypes[vote];

  const response = await methods.get(`post/${id}/${voteType}`, token);
  return response;
}
