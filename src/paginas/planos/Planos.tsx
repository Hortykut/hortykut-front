import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import './Planos.css'
import { Grid } from '@material-ui/core';
import { borders, typography } from '@material-ui/system';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import imgPlanos from "../../assets/imagens/Environment-amico.png";

function Planos() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
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

    return (
        <>

            <Typography variant="h6" className='tituloAssinatura' sx={{ fontWeight: 'bold', textAlign: 'center', fontSize: 35, width: '100%' }}>
                Planos de Assinatura
            </Typography>
            <Grid className='gridPlano'>
                <Grid item xs={6}>
                    <img src={imgPlanos} alt="Ilustração de fazendeiro, vestido de camisa vermelha e com uma ferramenta na mão" style={{ width: '53em' }} />
                </Grid>
                <Grid className='cards'>
                    <Box mx={2} display="flex">
                        <Card sx={{ maxWidth: 345, borderRadius: 8, borderColor: '#FFA200' }} variant="outlined" className='card'>
                            <CardMedia
                                sx={{ height: 230 }}
                                image="src/assets/imagens/coffee-beans-seeds.png"
                                title="Vetor de sementes de café"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO SEMENTE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    1 produto ou serviço
                                    por R$ 49,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' style={{ backgroundColor: "#FF7B00" }}>
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, borderRadius: 8, borderColor: '#FFA200' }} variant="outlined" className='card'>
                            <CardMedia
                                sx={{ height: 230 }}
                                image="src/assets/imagens/avocado.png"
                                title="Vetor de um abacate"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO FRUTO
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    2 produtos ou serviços
                                    por R$ 99,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' style={{ backgroundColor: "#FF7B00" }}>
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>

                        <Card sx={{ maxWidth: 345, borderRadius: 8, borderColor: '#FFA200' }} variant="outlined" className='card'>
                            <CardMedia
                                sx={{ height: 230 }}
                                image="src/assets/imagens/tree.png"
                                title="Vetor de uma árvore"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    PLANO ARVORE
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    3 produtos ou serviços
                                    por R$ 149,90/mês
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Button variant="contained" size='small' style={{ backgroundColor: "#FF7B00" }}>
                                        Adquirir
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
}

export default Planos;
