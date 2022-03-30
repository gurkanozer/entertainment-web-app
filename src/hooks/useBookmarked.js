import { useEffect } from "react";
import { useSelector } from "react-redux";

const useBookmarked = () => {
  const bookmarked = useSelector((state) => state.auth.bookmarked);
  const updateBookmark = (item) => {
    let bm = [];
    let index = bookmarked.findIndex((b) => b._id === item._id);
    if (index !== -1) {
      bm = bookmarked.filter((b) => b._id !== item._id);
    } else {
      bm = [...bookmarked, item];
    }
    return bm;
    // dispatch(toggleBookmark(bm));
  };
  const isBooked = (id) => {
    let contain = false;
    bookmarked.map((b) => {
      if (b._id === id) contain = true;
      return true;
    });
    if (contain) return true;
    return false;
  };
  useEffect(() => {}, []);
  return { isBooked, updateBookmark };
};

export default useBookmarked;
