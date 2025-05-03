'use client';
import { Routes } from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts/UsuarioLogado";

export default function App() {
  return (
    <UsuarioLogadoProvider>
      <Routes/>
    </UsuarioLogadoProvider>
  );
}
