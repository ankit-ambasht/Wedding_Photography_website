import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider} from "./Context/AuthContext"
// import PrivateRoute from "./Components/routes/PrivateRoute";
import Gallery from "./Components/Gallery/Gallery";
import UploadVideo from './Components/admin/UploadVideo';
import Film from "./Components/Video/Film";
// import AdminUpload from "./Components/admin/AdminUplode"
import Faq from "./Components/FAQ/Faq";
import Contactus from "./Components/ContactUs/Contactus";
import UploadImage from "./Components/admin/UploadImage";
import Uploadfaq from "./Components/admin/Uploadfaq";
import AdminPanel from "./Components/admin/AdminPanel";
import AdminLogin from "./Components/admin/AdminLogin";
// import LoginPage from "./Components/Login/LoginPage";
import ProtectedRoute from "./Components/routes/ProtectedRoute";
// import Prewedding from './Components/Prewedding/Prewedding';
// import UploadPreweddingImg from './Components/admin/UploadPreweddingImg';
// import FullPic from './Components/Gallery/FullPic'
import { useEffect, useState } from "react";
import Loading from "./Components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
        {loading ? (
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/Gallery" element={<Gallery />} />
            {/* <Route path="/PreWedding" element={<Prewedding/>}/> */}
            <Route path="/video" element={<Film />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contactUs" element={<Contactus />} />
            <Route path="/Upload/gallery" element={<UploadImage />} />
            <Route path="/Upload/Faq" element={<Uploadfaq />} />
             <Route path="/Upload/youtube/videoLink" element={<UploadVideo />} /> 
            <Route path="/admin/upload-video" element={<UploadVideo />} />
            <Route path="/admin" element={<AdminLogin />} />
            {/* <Route path="/login" element={<LoginPage />} /> */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminPanel />
                </ProtectedRoute>
              }
            /> 
            {/* <Route path="/Upload/prewedding" element={<UploadPreweddingImg/>}/>  */}
            {/* <Route path="/Upload/:image" element={<FullPic/>}/>  */}
          </Routes>
        ) : (
          <Loading />
        )}
      </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
