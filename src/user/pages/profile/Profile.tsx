import "./Profile.css";
import Footer from "../../components/footer/Footer";
import UserSideBar from "../../components/userSidebar/UserSidebar";
import { useEffect, useState } from "react";
import { BASE_URL2 } from "../../components/constants/BASEURL";
import axios from "axios";
import { useAuth } from "../../../context/authContext";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

interface UserProfile {
  user: {
    _id: string;
    fullName: string;
    email: string;
    address: string;
  };
}
const Profile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    const fetchUserProfile = async () => {
      setIsLoading(true);
      setError(null);

      try {
        if (user?.token) {
          const response = await axios.get(`${BASE_URL2}/users/profile`, {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          });
          console.log(response.data);

          setUserProfile(response.data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Failed to fetch user profile.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  if (isLoading) {
    return <p>Loading user profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userProfile) {
    return <p>No user profile data found.</p>;
  }

  return (
    <>
      {/* <BreadCrumb/> */}
      <Breadcrumb/>
      <div className="profilePage">
        <UserSideBar />
        <div className="profile-details">
          <p>ID: {userProfile.user._id}</p>
          <p>Name: {userProfile.user.fullName}</p>
          <p>Email: {}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
