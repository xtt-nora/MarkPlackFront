import http from "@/api";
export const PORT1 = "/mark";
export const editUser = (params: { id: string }) => {
  return http.post(PORT1 + `/user/edit`, params);
};
