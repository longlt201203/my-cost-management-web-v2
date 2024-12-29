import { BoardType } from "../../types/board";
import { axiosGet } from "./axios";

export async function listBoards() {
  const response = await axiosGet<BoardType[]>("/api/board");
  return response.data;
}
