import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Search from "../../components/Search/Search";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeInstaSearch } from "../../store/slices/usersData/userDataSlice";
import "./layout.css";
import CreatePost from "../../components/CreatePost/CreatePost";

const Layout = () => {
  const searchBox = useRef(null);
  const createPost = useRef(null);
  const scrollHome = useRef(null);
  const { pathname } = useLocation();
  const path = pathname.includes("/direct");
  const dispatch = useDispatch();

  const changeModalBlock = (ev) => {
    let x = ev.target.classList.contains("modalS"); 
    if(x) {
        searchBox.current.classList.remove("searchBlockNone");
    }
  };

  const addModalSearch = (ev) => {
    let f = ev.target.classList.contains("NavLink");
    let m = ev.target.classList.contains("searchModalBlock");

    if (f || m) {
      searchBox.current.classList.add("searchBlockNone");
      dispatch(changeInstaSearch());
    }
  }

  const closedCreatePost = (ev) => {

     if (ev.target.classList.contains("addModalCre")) {
       createPost.current.classList.add("noneModalCreate");
     }
  }


  
  return (
    <div className="layout" onClick={changeModalBlock}>
      <NavigationMenu createPost={createPost} />
      <div ref={searchBox} className="searchModalBlock searchBlockNone" onClick={(ev) => addModalSearch(ev)}>
        <Search searchBox={searchBox} />
      </div>
      <div ref={createPost} className="noneModalCreate" onClick={(ev) => closedCreatePost(ev)}>
        <CreatePost createPost={createPost}/>
      </div>
      <div className="pages">
        <Outlet />
        {path ? "" : <Footer />}
      </div>
    </div>
  );
};

export default Layout;
