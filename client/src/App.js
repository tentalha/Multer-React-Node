import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Upload from "./components/Upload";
import Videos from './components/Videos';

const App = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getAllVideos(); //Making api call to get all videos on the first render
  }, [videos])


  async function getAllVideos() {
    try {
      const response = await axios.get('http://localhost:3005/backend/api/media/');
      console.log(response?.data?.payload?.media);
      setVideos(response?.data?.payload?.media);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App w-100">
      <Upload refetch={getAllVideos} />
      <Videos videos={videos} />
      <ToastContainer />
    </div>
  );
}

export default App;
