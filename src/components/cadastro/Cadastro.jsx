import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { PiEnvelopeLight } from "react-icons/pi";
import usersData from "../../../database/data.json";
import 'bootstrap/dist/js/bootstrap.bundle.min'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Cadastro.css";

const Cadastro = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Função para verificar se a senha atende aos requisitos
    const isValidPassword = (password) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        return regex.test(password);
    };

    const handleLoginSuccess = (user) => {
        // Usuário autenticado com sucesso
        // Salve o login no LocalStorage
        localStorage.setItem("loggedUser", JSON.stringify(user));

        // Exiba a mensagem de sucesso
        setMessage("Usuário autenticado com sucesso.");

        // Redirecione para a página de dashboard após um breve atraso
        setTimeout(() => {
            navigate("/dashboard");
        }, 1500); // Redireciona após 1,5 segundo
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            nome,
            email,
            password,
        };


        // Chame a função de sucesso de login
        // handleLoginSuccess(user);
    };

    return (
        <div className="box-container">
            <div className="row">
                <div className="col-md-6 left-box">
                    <div className="featured-img">
                        <img src="../src/assets/LoginImagem/imagemeolicasolar.png  " alt="imagem de um sistema solar com um sistema eolico" />
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center right-box">
                    <div className="row align-items-center">
                        <div className="col-md-12 d-flex justify-content-center align-items-center logo">
                            <img
                                src="../src/assets/LoginImagem/logo.png"
                                alt="logo solar energy"
                            />
                        </div>
                        <div className="header-text mb-4 text-center">
                            <p className="saudacao">Efetue seu cadatsro</p>
                        </div>
                        <div className="col-md-12">
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <CiUser />
                                        </span>
                                        <input
                                            id="Nome"
                                            type="Nome"
                                            placeholder="Nome"
                                            className="form-control"
                                            required
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <PiEnvelopeLight />
                                        </span>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="E-mail"
                                            className="form-control"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                            <FiLock />
                                        </span>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Senha"
                                            className="form-control"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="actions">
                                        <div className="containerCadastro">
                                            <Link to="/">
                                                <p>Voltar</p>
                                            </Link>
                                        </div>
                                        <button type="submit" className="login-btn">
                                            Cadastre-se
                                        </button>
                                    </div>
                                    <div className="message">
                                        {message}
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
