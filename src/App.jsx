import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import { AppBar, Toolbar, Button, Container, Box, Paper, Typography } from '@mui/material';

export default function App() {
  return (
    <BrowserRouter>
      <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
        <Toolbar>
          <Button color="inherit" component={Link} to="/" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/cadastro" sx={{ fontWeight: 'bold', fontSize: '1.1rem', ml: 2 }}>
            Cadastro
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          bgcolor: '#f5f5f5',
          width: '100vw',     
          height: '100vh',    
          pt: 4,              
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',  
          boxSizing: 'border-box', 
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              bgcolor: 'white',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              overflowY: 'auto', 
            }}
          >
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              Sistema de Cadastro de Produtos
            </Typography>

            <Box sx={{ width: '100%', mt: 2, flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
              </Routes>
            </Box>
          </Paper>
        </Container>
      </Box>
    </BrowserRouter>
  );
}
