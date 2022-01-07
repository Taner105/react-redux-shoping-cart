import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { sepeteEkle } from "../actions";

const Products = (props) => {
  console.log(props.cart);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book, index) => {
        return (
          <div key={index} className="book">
            <img src={book.image} alt={book.name} />
            <div>
              <h4>{book.name}</h4>
              <p>Yazar: {book.author}</p>
              <p>Fiyat: &#8378; {book.price}</p>
              <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateProps = (state) => {
  return {
    bookList: state.bookList,
    cart: state.cart
  };
};
const mapActionsProps = () => {
  return {
    sepeteEkle: sepeteEkle,
  };
};

export default connect(mapStateProps, mapActionsProps())(Products);
