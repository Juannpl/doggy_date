import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import CustomLoginAdminPage from "../../components/admin/custom_login_admin_page";
import authProvider from "../../components/admin/AuthProvider";
import UserList from "../../components/admin/user/User_list";
import UserEdits from "../../components/admin/user/User_edits";
import UserShow from "../../components/admin/user/User_show";
import UserCreate from "../../components/admin/user/User_create";
// import PostList from "../components/Admin/Posts/PostsList";
// import PostCreate from "../components/Admin/Posts/PostCreate";
// import PostShow from "../components/Admin/Posts/PostShow";
// import PostEdits from "../components/Admin/Posts/PostEdits";

const Admin_page = () => {
  const dataProvider = simpleRestProvider("http://localhost:3000/admin");

  return (
    <Admin
      basename="/admin"
      dataProvider={dataProvider}
      loginPage={CustomLoginAdminPage}
      authProvider={authProvider}
    >
      <Resource
        name="users"
        options={{ label: "Users" }}
        list={UserList}
        edit={UserEdits}
        show={UserShow}
        create={UserCreate}
      />
      {/* <Resource
        name="posts"
        options={{ label: "Posts" }}
        list={PostList}
        edit={PostEdits}
        show={PostShow}
        create={PostCreate}
      /> */}
    </Admin>
  );
};

export default Admin_page;
