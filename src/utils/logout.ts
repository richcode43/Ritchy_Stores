import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { User, useAuth } from "../context/authContext";

export const useLogout = () => {
  const {setUser} = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmation = await Swal.fire({
      title: 'Are you sure you want to logout?',
      text: 'You will be redirected to the homepage.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Logout',
    });

    if (confirmation.isConfirmed) {
      // Remove token from local storage or cookies
      localStorage.removeItem('auth-token'); // Replace with your storage mechanism
      console.log('auth token removed');
      setUser({} as User)
      // Optionally, clear any user-specific data

      navigate('/'); // Redirect to homepage
    }
  };

  return handleLogout;
};
