import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroProdutos.css';
import { useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId, post, put } from '../../../services/Service';
import Categoria from '../../../models/Categoria';
import Produtos from '../../../models/Produtos';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroProdutos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [categorias, setCategorias] = useState<Categoria[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")

        }
    }, [token])

    const [categoria, setCategoria] = useState<Categoria>(
        {
            id: 0,
            descricao: ''
        })
    const [produto, setProduto] = useState<Produtos>({
        id: 0,
        titulo: '',
        valor: 0,
        responsavel: '',
        descricao: '',
        foto: '',
        categoria: null
    })

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria
        })
    }, [categoria])

    useEffect(() => {
        getCategorias()
        if (id !== undefined) {
            findByIdProdutos(id)
        }
    }, [id])

    async function getCategorias() {
        await busca("/categoria", setCategorias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdProdutos(id: string) {
        await buscaId(`/produto/${id}`, setProduto, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedProduto(e: ChangeEvent<HTMLInputElement>) {

        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            categoria: categoria
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto atualizado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/produto`, produto, setProduto, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Produto cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/produto')
    }

    return (
        <>
            <Container maxWidth="sm" className="topo" style={{background:"antiquewhite", borderRadius:"15px solid black"}}>
                <form onSubmit={onSubmit}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center">Cadastro de serviços</Typography>
                    <TextField value={produto.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="titulo" label="titulo" variant="outlined" name="titulo" margin="normal" fullWidth />
                    <TextField value={produto.valor} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="valor" label="Valor" variant="outlined" name="valor" margin="normal" fullWidth />
                    <TextField value={produto.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="foto" label="Foto" variant="outlined" name="foto" margin="normal" fullWidth />
                    <TextField value={produto.responsavel} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="responsavel" label="Responsável pelo cadastro" variant="outlined" name="responsavel" margin="normal" fullWidth />
                    <TextField value={produto.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProduto(e)} id="descricao" label="Descrição" name="descricao" variant="outlined" margin="normal" fullWidth />

                    <FormControl >
                        <InputLabel id="demo-simple-select-helper-label">Categoria </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            onChange={(e) => buscaId(`/categoria/${e.target.value}`, setCategoria, {
                                headers: {
                                    'Authorization': token
                                }
                            })}>
                            {
                                categorias.map(categoria => (
                                    <MenuItem value={categoria.id}>{categoria.descricao}</MenuItem>
                                ))
                            }
                        </Select>
                        <FormHelperText>Escolha um tema para o produto</FormHelperText>
                        <Button type="submit" variant="contained" style={{background:"#ff7b00", color:"white"}}>
                            Finalizar
                        </Button>
                    </FormControl>
                </form>
            </Container>
        </>
    );
}

export default CadastroProdutos;