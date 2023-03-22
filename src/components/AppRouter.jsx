import React, {useContext} from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";
//TODO Понять что выводится первоначально, что отрисовывается из вложенных в outlet роутов
const AppRouter = () => {
  const {isLoading} = useContext(AuthContext)

  if (isLoading) {
    return <Loader/>
  }

  return (
    <div>
      <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="/posts/:id" element={<PostIdPage/>}/>
          <Route path="/about" element={<About/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        {/*<Route path="/error" element={<Error/>}/>*/}
      </Routes>
    </div>
  )
}

export default AppRouter
