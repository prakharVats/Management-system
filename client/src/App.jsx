import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Box, Stack } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Analytics from "./Components/Pages/Analytics/Analytics";
import Task from "./Components/Pages/Task/Task";
import Projects from "./Components/Pages/ProjectsAndDocs/Projects";
import Finance from "./Components/Pages/Finance/Finance";
import Clients from "./Components/Pages/VendorsAndClients/VendorsAndClients";
import TakeNotes from "./Components/Pages/Note/Notes";
const border = {
  border : "2px solid red"
}
function App() {
  return (
    <Router>
      {/* flexGrow: 1 */}
    <Box sx={{ height:"100vh"}}>
    <Grid container>
      <Grid size={2.2} >
        <Sidebar/>
      </Grid>
      <Grid size={9.8} sx={{scrollbarWidth:"none"}}>
          <Navbar/>
          <Routes>
            {/* <Route path="/" element={<Analytics />} /> */}
            <Route path="/" element={<Task />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/clients&vendors" element={<Clients />} />
            <Route path="/notes" element={<TakeNotes />}/>
          </Routes>
      </Grid>
    </Grid>
  </Box>
  </Router>
  )
}

export default App
