export const UseRequest = () => {

  const get = async (url) => {
    const result = await fetch(url);
    return result.json();
  };
  const post = async (url, data) => {
    const result = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return result.json();
  };
  const patch = async (url, data) => {
    const result = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    const res = await result.json();
    return res;
  };
  const put = async (url, data) => {
    const info = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const newInfo = await info.json();
    return newInfo;
  };
  const del = async (url) => {
    const delActive = await fetch(url, {
      method: "DELETE",
    });
    return delActive;
  };

  return { get, post, patch, put, del };
};
