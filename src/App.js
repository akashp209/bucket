import './App.css';
// import S3FileUpload from 'react-s3';
// import { uploadFile } from 'react-s3';
// import keys from '../src/keys';
import '../src/js/script'
// import { upload } from '@testing-library/user-event/dist/upload';


const config = {
  bucketName: 'akreactbucket',
  // dirName: 'photos', /* optional */
  region: 'ap-south-1',
  accessKeyId: 'AKIAXXLHD2SGSPEZS2XQ',
  secretAccessKey: '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',
};
function upload(e) {
  console.log(e.target);
};

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Upload</h1>
        <input type="file"  onChange={upload}/>
      </header>
    </div>
  );
}

export default App;
