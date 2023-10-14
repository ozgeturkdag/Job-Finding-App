import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './pages/jobList';
import AddJob from './pages/addJob';
import Header from './components/header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<JobList />} />
        <Route path="/add-job" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;