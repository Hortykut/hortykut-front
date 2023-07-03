import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import Login from './paginas/login/Login';
import Sobre from './paginas/sobre/Sobre';
import ListaProdutos from './components/produtos/listaprodutos/ListaProdutos';
import Planos from './paginas/planos/Planos';
import './App.css';
import Depoimentos from './paginas/depoimentos/Depoimentos';
import ListaCategoria from './components/categorias/listaCategoria/ListaCategoria';
import CadastroCategoria from './components/categorias/cadastroCategoria/CadastroCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroProdutos from './components/produtos/cadastroProdutos/CadastroProdutos';
import DeletarProdutos from './components/produtos/deletarProdutos/DeletarProdutos';
import { Provider } from 'react-redux';
import store from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        {/* Tudo que precisa ser renderizado na tela que vai direcionar para algum lugar fica aqui */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/cursos" element={<ListaProdutos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/depoimentos" element={<Depoimentos />} />
          <Route path="/categoria" element={<ListaCategoria />} />
          <Route path="/formularioCategoria" element={<CadastroCategoria />} />
          <Route path="/formularioCategoria/:id" element={<CadastroCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          <Route path="/formularioProduto" element={<CadastroProdutos />} />
          <Route path="/formularioProduto/:id" element={<CadastroProdutos />} />
          <Route path="/produto" element={<ListaProdutos />} />
          <Route path="/deletarProduto/:id" element={<DeletarProdutos />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;