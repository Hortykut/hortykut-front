import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './servicos.css'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Servicos() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    return (

        <>
        <Box className='caixaServico'>
            <Box className='card1'>
                <CardContent >
                    <Card sx={{ maxWidth: 500}}style={{width: "450px"}} >
                        <CardActionArea onClick={handleOpen2}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="foto da mentoria"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    MENTORIA
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    CLIQUE PARA SABER DA MENTORIA
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </CardContent>
                <Modal
                    open={open2}
                    onClose={handleClose2}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Você sabe o que é a mentoria?
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            A agricultura é uma das atividades mais antigas do mundo e continua sendo uma das mais importantes e necessárias para a sobrevivência humana. No entanto, a complexidade do setor agrícola e as mudanças constantes do mercado podem ser desafiadoras para os produtores. É por isso que a mentoria em agricultura é tão importante.
                            A mentoria em agricultura oferece orientação e ensino para aqueles que desejam melhorar suas habilidades e conhecimentos na área. Isso pode incluir a plantação, gerenciamento de recursos, técnicas de colheita e muito mais. A mentoria também pode ajudar os agricultores a se adaptarem às mudanças do mercado e a identificar novas oportunidades para seus negócios.
                        </Typography>
                    </Box>
                </Modal>
            </Box>

            <Box className='card2'>
                <CardContent>
                    <Card sx={{ maxWidth: 500}}style={{width: "450px"}}>
                        <CardActionArea onClick={handleOpen}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="foto da mentoria"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    CONEXÕES
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    CLIQUE PARA SABER DA CONEXÕES
                                </Typography>
                            </CardContent>

                        </CardActionArea>
                    </Card>
                </CardContent>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal"
                    aria-describedby="modal-modal"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal" variant="h6" component="h2">
                            Você sabe o que são conexões?
                        </Typography>
                        <Typography id="modal-modal" sx={{ mt: 2 }}>
                            🍊A conexão é uma estrutura que liga pequenos agricultores a revendedores, facilitando a venda e compra de produtos agrícolas.
                            O objetivo principal dessa rede é proporcionar uma maior eficiência no comércio agrícola, reduzindo os custos de transação e aumentando a competitividade dos pequenos agricultores. Com a ajuda de revendedores, esses agricultores conseguem chegar a um mercado maior, aumentando assim suas chances de venda e lucro.
                        </Typography>
                    </Box>
                </Modal>
            </Box>
        </Box>    
        </>
    );
}

export default Servicos;