import { styled } from "styled-components";

const BookContainer = styled('div')`
  display: flex;
  justify-content: space-around;
  align-items: center;

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
`

const Book = (props) => {
  const { data } = props;
  return (
    <BookContainer>
      <div className="img-box">
        <img src={data.image} alt={data.title} />
      </div>
      <h2 className="book-title">{data.title}</h2>
      <p className="part-number">{data.parts} tập</p>
      <p className="time">{data.create} phuts truoc</p>
    </BookContainer>
  );
};

export default Book;
