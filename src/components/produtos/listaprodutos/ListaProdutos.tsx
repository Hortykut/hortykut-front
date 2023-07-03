import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography, Grid, AppBar, Tabs, Tab } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaProdutos.css';
import Produtos from '../../../models/Produtos';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produtos[]>([])
    let navigate = useNavigate();
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

    async function getProdutos() {
        await busca("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProdutos()

    }, [produtos.length])
    return (
        <>
            <AppBar position="static" style={{ background: "#ffa200" }}>
                <Tabs centered indicatorColor="secondary">
                    <Tab label="Lista de todos os produtos" value="1" />
                </Tabs>
            </AppBar>
            {
                produtos.map(produto => (
                    <Grid className='gridPlano'>
                        <Box m={2}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Produtos
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        {produto.produto}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.valor}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.responsavel}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.descricao}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        <img src={produto.foto} alt="" />
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {produto.categoria?.descricao}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box display="flex" justifyContent="center" mb={1.5}>
                                        <Link to={`/formularioProduto/${produto.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    Atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarProduto/${produto.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                    Deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Box>
                    </Grid>
                ))
            }
        </>
    )
}

export default ListaProdutos;