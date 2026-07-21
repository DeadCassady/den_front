import { SERVER_ROUTES } from "@/constants/routes";
import { Guarantee, Price } from "@/constants/types";

interface Options {
  route?: string;
  token?: string;
  body?: {
    username?: string;
    email?: string;
    password?: string;
    serialNumber?: string;
    isNew?: boolean;
    title?: string;
    type?: string;
    specification?: string;
    guarantee?: Guarantee;
    price?: Price[];
    orderId?: number;
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
