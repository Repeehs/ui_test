import { useState } from "react";
import CustomPagination from "../CustomPagination";
import Book from "./Book"
const data = [
  {
    title: "Người Tại đấu Phá Viết Nhật Ký, Nữ Chính Toàn Bộ Mộng!",
    like: 2,
    id: 1,
    image: "https://truyenaudiocv.org/uploads/manga/nguoi-tai-dau-pha-viet-nhat-ky-nu-chinh-toan-bo-mong/cover/cover_thumb.jpg",
    parts: 26
  },
  {
    title: "Người Tại đấu Phá Viết Nhật Ký, Nữ Chính Toàn Bộ Mộng!",
    like: 2,
    id: 1,
    image: "https://truyenaudiocv.org/uploads/manga/nguoi-tai-dau-pha-viet-nhat-ky-nu-chinh-toan-bo-mong/cover/cover_thumb.jpg",
    parts: 26
  },
  {
    title: "Người Tại đấu Phá Viết Nhật Ký, Nữ Chính Toàn Bộ Mộng!",
    like: 2,
    id: 1,
    image: "https://truyenaudiocv.org/uploads/manga/nguoi-tai-dau-pha-viet-nhat-ky-nu-chinh-toan-bo-mong/cover/cover_thumb.jpg",
    parts: 26
  }
]
const ListBooks = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePageHandler = (
    event,
    value,
  ) => {
    setCurrentPage(value)
  };

  return <div>
    {data.map((item) => <Book data={item} />)}
    <CustomPagination totalPage={5} currentPage={currentPage} changePageHandler={changePageHandler}/>
  </div>
}

export default ListBooks;