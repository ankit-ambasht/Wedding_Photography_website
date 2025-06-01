// import React, { useState } from 'react';
// import axios from 'axios';
// import AdminHeader from './AdminHeader';

// export default function AdminUpload  () {
//   const [youtubeUrl, setYoutubeUrl] = useState('');
//   const [videoFile, setVideoFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     if (youtubeUrl) {
//       formData.append('youtubeUrl', youtubeUrl);
//     } else if (videoFile) {
//       formData.append('video', videoFile);
//     }

//     try {
//       await axios.post('http://localhost:5000/upload-video', formData);
//       alert('Video uploaded successfully!');
//       setYoutubeUrl('');
//       setVideoFile(null);
//     } catch (err) {
//       alert('Upload failed');
//     }
//   };

//   return (
//     <>
//     <AdminHeader />
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Upload Video</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           placeholder="YouTube Link"
//           value={youtubeUrl}
//           onChange={(e) => setYoutubeUrl(e.target.value)}
//           className="w-full p-2 border"
//         />
//         <p className="text-center">OR</p>
//         <input
//           type="file"
//           accept="video/*"
//           onChange={(e) => setVideoFile(e.target.files[0])}
//           className="w-full p-2 border"
//         />
//         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//           Upload
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };


