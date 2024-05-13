import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globalStyle.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Navbar} from './components/navbar/navbar.tsx';
// import {Slider} from './components/slider-carousel/slider-carousel.tsx';
// import {DwnldUpdtCard} from "./components/сards/dwnldUpdtCard.tsx";
// import {NewsCard} from "./components/сards/newsCard.tsx";
// import {Footer} from "./components/footer/footer.tsx";
import UsersPageAdmin from "./Pages/UsersPageAdmin.tsx";
import RolesPageAdmin from "./Pages/RolesPageAdmin.tsx";
import Login from "./components/Login/Login.tsx";
import UserProfilePage from "./Pages/UserProfilePage.tsx";
import MainPage from "./Pages/MainPage.tsx";
import {Footer} from "./components/footer/footer.tsx";
import Registration from "./components/Registration/Registration.tsx";
import UserRegistration from "./components/Registration/UserRegistration.tsx";
import TeacherRegistration from "./components/Registration/TeacherRegistration.tsx";
import GroupsPage from "./Pages/GroupsPage.tsx";

function App() {

    return (
        <>
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<MainPage/>}></Route>
                        <Route path={"/usersPage"} element={<UsersPageAdmin/>}></Route>
                        <Route path={"/rolesPage"} element={<RolesPageAdmin/>}></Route>
                        <Route path={"/groupsPage"} element={<GroupsPage/>}></Route>
                        <Route path={"/registration"} element={<Registration/>}></Route>
                        <Route path={"/userRegistration"} element={<UserRegistration/>}></Route>
                        <Route path={"/teacherRegistration"} element={<TeacherRegistration/>}></Route>
                        <Route path={"/login"} element={<Login/>}></Route>
                        <Route path={"/profile"} element={<UserProfilePage/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>

            <div style={{marginTop: "140px"}}>
                <Footer/>
            </div>

            {/*<Slider/>*/}
            {/*<DwnldUpdtCard/>*/}
            {/*<NewsCard/>*/}
            {/*<Footer/>*/}
        </>
    )
}

export default App
