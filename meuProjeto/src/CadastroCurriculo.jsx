import { useState } from "react";
import { Search, Download, FileText } from "lucide-react";
import "./App.css";


export default function CadastroCurriculo() {
    return (
        <div className="page">
            <header className="header">
                <div className="logo">
                    Currilos<span className="logo-accent">Link</span>
                </div>
                <nav className="nav">
                    <button className="nav-link">Entrar</button>
                    <button className="nav-link">Publicar currículo</button>
                </nav>
            </header>

            <div className="search-bar-wrap">
                <div className="search-bar">
                    <Search size={18} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="search-input"
                    />
                </div>
            </div>
        </div>
    );
}