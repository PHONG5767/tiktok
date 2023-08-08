import Following  from "~/page-folder/Following";
import  Home  from "~/page-folder/Home";
import  Profile  from "~/page-folder/Profile";
import Upload from "~/page-folder/Upload";
import HeaderOnly from "~/Components/Layout/OnlyHeader/Header";
import Search from "~/page-folder/Search";

const publishRoute = [
    {path:'/', component:Home},
    {path:'following', component:Following},
    {path:'profile', component:Profile},
    {path:'upload', component:Upload,Layout:HeaderOnly},
    {path:'search', component:Search,Layout:null},

]
const privateRoutes = []
export {publishRoute, privateRoutes}