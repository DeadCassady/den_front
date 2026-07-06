import { SERVER_ROUTES } from "@/constants/routes";

interface Options {
  route?: string;
  token?: string;
  body?: {
    username?: string;
    description?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
}

export const apiGet = async (options: Options) => {
  const res = await fetch(`${SERVER_ROUTES.HOST}${options.route}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
  });
  if (!res.ok) {
    return null;
  }

  return await res.json();
};

export const apiPost = async (options: Options) => {
  const res = await fetch(`${SERVER_ROUTES.HOST}${options.route}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
    body: JSON.stringify({
      ...options.body,
    }),
  });

  if (!res.ok) {
    return null;
  }
  return await res.json();
};

export const apiPatch = async (options: Options) => {
  const res = await fetch(`${SERVER_ROUTES.HOST}${options.route}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
    body: JSON.stringify({
      ...options.body,
    }),
  });
  if (!res.ok) {
    return null;
  }
  return await res.json();
};

export const apiDelete = async (options: Options) => {
  const res = await fetch(`${SERVER_ROUTES.HOST}${options.route}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${options.token}`,
    },
  });
  if (!res.ok) {
    return null;
  }
  return await res.json();
};
