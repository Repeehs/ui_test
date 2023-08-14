import { styled } from "styled-components";
import { timeSince } from "../../../../utils/timeSince";

const BookContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  .img-box {
    height: 50px;
    width: 50px;
    overflow: hidden;

    img {
      height: 50px;
      width: 50px;
      object-fit: cover;
    }
  }

  .book-title {
    width: 35%;
    font-weight: 600;
    margin: 0;
    font-size: 14px;
  }

  .part-number {
    color: #999;
    display: block;
    padding: 0 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 25px;
    float: left;
  }

  .time {
    text-align: right;
    color: #999;
    display: block;
    padding: 0 5px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 25px;
    float: left;
  }
`;

const Book = (props) => {
  const { data, click } = props;
  const thumb =
    "https://truyenaudiocv.org/uploads/manga/nguoi-tai-dau-pha-viet-nhat-ky-nu-chinh-toan-bo-mong/cover/cover_thumb.jpg";
  return (
    <BookContainer onClick={() => click(data)}>
      <div className="img-box">
        <img src={thumb} alt={data.title} />
      </div>
      <h2 className="book-title">{data.title}</h2>
      <p className="part-number">{data.parts} tập</p>
      <p className="time">{timeSince(data.updated_at)}</p>
    </BookContainer>
  );
};

export default Book;
