
import { Button, Col, Drawer, Form, Input, message, Row, Space } from 'antd';
import { Alert } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import {Checkbox} from 'antd';
import { useState } from 'react';
import { useEffect } from "react";
import { CARREGANDO } from "../../Carregando";
import './Logindropdown.css'
import logoImg from '../../../_assets/Logoazul.png'


export function Logindropdown () {
    
    const [errorLogin, setErrorLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loginSucessfull, setLoginSucessfull] = useState(false);
    const [loginData, setLoginData]= useState([]);
    const [valueEmail, setValueEmail] = useState([{email:""}])
    const [valuePassword, setValuePassword] = useState([{password:""}])



    function getValueLoginEmail (event) {
        setValueEmail({email:event.target.value});
        
    };

    function getValueloginPassword (event) {
        setValuePassword({password:event.target.value});

    };

    function exitLogin () {
        setLoading(true);
        localStorage.removeItem('login');
        localStorage.removeItem('token');
        setLoginSucessfull(false);
        showDrawerSalesCar();
        setLoading(false);

    }

    async function submitLogin() {
        console.log(valueEmail,valuePassword)
        setLoading(true)
        setErrorLogin(false)

        try {
            const response = await fetch('https://projetotera-back-end.herokuapp.com/user/login',{
                method: 'POST',
                headers:{"Content-Type": "application/json"},
                body: JSON.stringify ({

                    email:valueEmail.email,
                    password:valuePassword.password
            
                })

            });

            let data = await response.json();
            console.log(data);
            const token = data.token;
            const login = {name:data.name, email:data.email};
            setLoginData(login);
            
            
            if(!token) {
                console.log("Login não autorizado")
                setLoading(false);
                setErrorLogin(true);

            }else{

               localStorage.setItem('token',JSON.stringify(token));
               localStorage.setItem('login',JSON.stringify(login));
               setLoginData(login);
               setLoading(false);
               setLoginSucessfull(true);
               console.log("logado com sucesso");


            }
            
        } catch (error) {

            setErrorLogin(true)
            setLoading(false);
            console.log(message.error);
            
        }
       
        



    }


  useEffect(()=>{

    const verifcaToken = localStorage.getItem('token');
    const verifcaLogin = localStorage.getItem('login');

    if(!verifcaToken && !verifcaLogin){
        
        setLoginSucessfull(false);
        console.log('Deu error');

    }else {
        
        const login = JSON.parse(verifcaLogin);
        setLoginData(login)
        setLoginSucessfull(true)
        
    }



  },[])
    


    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);

      
    };

    const [visibleSalesCar, setVisibleSalesCar] = useState(false);

    const showDrawerSalesCar = () => {
        setVisibleSalesCar(true);

    };
    
    const onCloseSalesCar = () => {
        setVisibleSalesCar(false);

    };

    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    

    const menu = (
        <Menu className='Menu'
          items={[
            {
              key: '1',
              label: (
               <>
                    <Button className='Bnt__Cadastrar' type="" onClick={showDrawerSalesCar} >
                        {
                            loginSucessfull 
                            ?
                            "Minha Conta"
                            :
                            "Entrar"
                            
                        }
                    </Button>
                    <Drawer 
                        title= {
                                    loginData.name
                                    ?
                                    `Bem vindo, ${loginData.name}`
                                    :
                                    "Fazer Login"
                                }

                        placement="right" onClose={onCloseSalesCar} visible={visibleSalesCar}
                    >
                    <div className= 'Login__Content'>
                        <img className='Login__Img' src={logoImg} alt="" />

                        {   
                            loading 
                            ? 
                            <CARREGANDO /> 
                            : 
                            ""
                        }

                        <div className={loginSucessfull ? "Login__display" : "Login__Content--Disable"}>

                            <ul className="Login_options">
                                <li>Minha conta</li>
                                <li>Meus pedidos</li>
                                <li>Contato</li>
                                <li>Avaliações e Comentários</li>
                            </ul>

                        </div>

                        <Form 
                            className= {
                                loading 
                                ||
                                loginSucessfull
                                ? 
                                'Login__Content--Disable ' 
                                : 
                                'Form__Login' 
                            }

                            name="basic"
                                labelCol={{
                                    span: 8,
                                }}
                                wrapperCol={{
                                    span: 16,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="on"
                                >
                                <Form.Item
                                    label="E-mail"
                                    name="E-mail do usuário"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, digite seu e-mail!',
                                    },
                                    ]}
                                >
                                    <Input 
                                     
                                     onChange={event => getValueLoginEmail(event)}/>
                                </Form.Item>

                                <Form.Item
                                    label="Senha"
                                    name="Senha"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, digite sua senha!',
                                    },
                                    ]}
                                >
                                    <Input.Password onChange={event => getValueloginPassword(event)} />
                                </Form.Item>

                                <Form.Item
                                    name="Lembrar"
                                    valuePropName="checked"
                                    wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                    }}
                                >
                                    <Checkbox>Lembre-me</Checkbox>
                                </Form.Item>

                                <Form.Item
                                    wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                    }}
                                >
                                    <Button type="primary" onClick={submitLogin}>
                                        Fazer login
                                    </Button><br/>
                                    {   
                                        errorLogin 
                                        ?
                                        <Alert className="login__errormsg"
                                            message="E-mail ou senha incorretos"
                                            description=""
                                            type="error"
                                            showIcon
                                        /> 
                                        :
                                        ''
                                    }
                                </Form.Item>
                        </Form>
                    </div> 
                    
                    </Drawer>
               </>
              ),
            },
            {
              key: '2',
              label: ( 
                <>
                <Button className='Bnt__Cadastrar' onClick={loginSucessfull ? exitLogin  : showDrawer}>
                    {   
                        loginSucessfull 
                        ? 
                        "Sair" 
                        :
                        "Cadastrar"

                    }

                </Button>
                < Drawer
                    title="Criar nova conta"
                    width={720}
                    onClose={onClose}
                    visible={visible}
                    bodyStyle={{
                        paddingBottom: 80,
                    }}
                    extra={
                        <Space>
                        <Button onClick={onClose}>Cancelar</Button>
                        <Button onClick={onClose} type="primary">
                            Cadastrar
                        </Button>
                        </Space>
                    }
                    >
                    <Form layout="vertical" hideRequiredMark>
                        <img className='Cadastro__Img' src={logoImg} alt="" />
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="Nome"
                            label="Nome"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, entre com seu nome',
                                },
                            ]}
                            >
                            <Input placeholder="Digite seu nome" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="Senha"
                            label="Senha"
                            rules={[
                                {
                                required: true,
                                message: 'Digite sua senha',
                                },
                            ]}
                            >
                            <Input
                                style={{
                                width: '100%',
                                }}
                                placeholder="Digite sua senha"
                            />
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="Confirme sua senha"
                            label="Confirme sua senha"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, confirme sua senha',
                                },
                            ]}
                            >
                            <Input placeholder="Por favor, confirme sua senha" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                            name="CEP"
                            label="Cep"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, digite seu Cep',
                                },
                            ]}
                            >
                            <Input placeholder="Digite seu Cep" />
                            </Form.Item>
                        </Col>
                        </Row>
                        <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="CPF"
                            label="CPF"
                            rules={[
                                {
                                required: true,
                                message: 'Por favor, digite seu CPF',
                                },
                            ]}
                            >
                            <Input placeholder="Digite seu CPF" />
                            </Form.Item>
                        </Col>
                        </Row>
                        
                    </Form> 
                </Drawer>
                </>
                
              ),
            },
          ]}
        />
        
    );


    return (

        <div>
            <Dropdown overlay={menu}>
                <a href='/#' onClick={(e) => e.preventDefault()} >
                <Space className='Space' >
                    <svg className="banner-login" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="https://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28"><path fillRule="evenodd" clipRule="evenodd" d="M18.6375 13.5625C20.6063 12.2062 21.875 9.975 21.875 7.4375C21.875 3.325 18.55 0 14.4375 0C10.325 0 7 3.325 7 7.4375C7 9.975 8.26875 12.2062 10.2375 13.5625C6.34375 14.7875 3.5 18.4625 3.5 22.75V28H25.375V22.75C25.375 18.4625 22.5312 14.7875 18.6375 13.5625Z" fill="#347BBE"></path></mask><g mask="url(#mask0)"><circle cx="14.5" cy="11.5" r="15.5" fill="white"></circle></g></svg>
                    <span>{loginSucessfull ? `Olá, ${loginData.name}` : "Faça seu Login"}</span> 
                    <DownOutlined />
                </Space>
                </a>
            </Dropdown>

        </div>
            
        
    );

}