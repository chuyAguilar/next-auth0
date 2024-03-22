
import loginlogout from "../src/components/LoginLogout";

import  { withPageAuthRequired} from "@auth0/nextjs-auth0";

export const getServerSideProps = withPageAuthRequired();

    const Profile = (props) => {
    const { user } = props; 
    return ( 
    <div> 
        <h1>profile</h1>
        {loginlogout()} {/* Aquí se debe llamar a la función loginlogout */}
        <p>Nombre: {user.name}</p>
    </div>
        );
    }

export default Profile;