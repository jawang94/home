const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://jawang94-personal-site-server.herokuapp.com/api`;

const methods = {
  async get(endpoint, token = null) {
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

  async post(endpoint, body, token = null) {
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
        json.errors.forEach((error) => {
          throw Error(`${error.param} ${error.msg}`);
        });
      }

      throw Error(json.message);
    }

    return json;
  },

  async delete(endpoint, token = null) {
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

export async function login(username, password) {
  const json = await methods.post('login', { username, password });
  return json.token;
}

export async function signup(username, password) {
  const json = await methods.post('register', { username, password });
  return json.token;
}

export async function getPosts(category) {
  const response = await methods.get(`posts/${category}`);
  return response;
}

export async function getProfile(username) {
  const response = methods.get(`user/${username}`);
  return response;
}

export async function getPost(id) {
  const response = methods.get(`post/${id}`);
  return response;
}

export async function createPost(body, token) {
  const response = methods.post('posts', body, token);
  return response;
}

export async function deletePost(id, token) {
  const response = methods.delete(`post/${id}`, token);
  return response;
}

export async function createComment(post, comment, token) {
  const response = methods.post(`post/${post}`, comment, token);
  return response;
}

export async function deleteComment(post, comment, token) {
  const response = methods.delete(`post/${post}/${comment}`, token);
  return response;
}

export async function castVote(id, vote, token) {
  const voteTypes = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote',
  };

  const voteType = voteTypes[vote];

  const response = await methods.get(`post/${id}/${voteType}`, token);
  return response;
}
