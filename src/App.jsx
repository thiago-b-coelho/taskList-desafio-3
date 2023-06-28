import React from "react";
import Header from "./Components/Header/Header";
import TaskList from "./Components/TaskList/TaskList";

/* Lista de tarefas default */
const db = [
    {
        id: 1,
        title: "Exercicios",
        description: "Ir para academia fazer exercicios",
        completed: true,
        isEditing: false,
    },
    {
        id: 2,
        title: "Limpar o carro",
        description: "Limpar o carro inteiro, de dentro pra fora",
        completed: false,
        isEditing: false,
    },
    {
        id: 3,
        title: "Banho e tosa",
        description: "Levar o cachorro ao pet shop",
        completed: false,
        isEditing: false,
    },
    {
        id: 4,
        title: "Limpar quarto",
        description: "Limpar toda bagunça que está dentro do quarto",
        completed: true,
        isEditing: false,
    },
    {
        id: 5,
        title: "trabalhar",
        description: "Chegar ao escritorio antes das 20:00",
        completed: true,
        isEditing: false,
    },
    {
        id: 6,
        title: "Ir ao banco",
        description: "Chear ao banco antes das 10:00",
        completed: false,
        isEditing: false,
    },
    {
        id: 7,
        title: "Almoçar",
        description: "Preparar a comida para a janta",
        completed: false,
        isEditing: false,
    },
    {
        id: 8,
        title: "Jogar volei",
        description: "Ir a quadra para jogar volei com os amigos",
        completed: true,
        isEditing: false,
    },
    {
        id: 9,
        title: "Estudar programação",
        description: "Entrar na plataforma dos alunos para estudar",
        completed: false,
        isEditing: false,
    },
    {
        id: 10,
        title: "Shopping",
        description: "Fazer algumas compras no shopping",
        completed: true,
        isEditing: false,
    },
];

function App() {
    /**
     * Para simplificação, o App.jsx conterá apenas a lista de tarefas que
     * inicializa o localStorage e os componentes de Header e TaskList que 
     * recebe a lista de tarefas via props (destructuring).
     */
    return (
        <>
            <Header />
            <TaskList data={db} />
        </>
    );
}

export default App;
