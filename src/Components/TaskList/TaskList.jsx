import React, { useEffect, useState } from "react";
import "./index.scss";
import NewTask from "../NewTask/NewTask";
import ViewTasks from "../ViewTasks/ViewTasks";

/**
 * Aqui está a maior parte lógica do código. Esse componente possui as funções
 * de adição, edição, deleção e conclusão de tarefas. Nesse componente é definida
 * a estrutura da tabela que mapeia a lista de tarefas e é criada dinâmicamente.
 * Os componentes utilizados aqui são o ViewTasks (mostra a lista de tarefas com
 * botões de deletar, editar e 'concluir') e o NewTask (autoexplicativo).
 */

const TaskList = ({ data }) => {
    /**
     * Aqui a lista de tarefas é inicializada no localStorage para que seja
     * usada de exemplo e não seja perdida caso a página seja atualizada.
     * A lista retornada pelo useState fica armazenada na variável tasks.
     */
    const [tasks, setTasks] = useState(() => {
        const localValue = localStorage.getItem("ITEMS");
        if (!localValue) localStorage.setItem("ITEMS", JSON.stringify(data));
        return JSON.parse(localValue);
    }, []); // componentDidMount 1x

    /**
     * Toda vez que 'tasks' for atualizado o useEffect salva a nova lista de
     * tarefas no localStorage, seja ela menor ou maior que a anterior.
     */
    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(tasks));
    }, [tasks]); // componentDidUpdate toda vez que 'tasks' atualiza

    /**
     * A função atualiza a lista de tarefas trocando o status da tarefa escolhida
     * Se estiver completa fica incompleta etc... Um state é imutável, por isso
     * é necessário atualizar a lista inteira.
     */
    function toggleCompleted(id, completed) {
        setTasks((currentTasks) => {
            return currentTasks.map((task) => {
                if (task.id === id) {
                    return { ...task, completed };
                }
                return task;
            });
        });
    }

    /**
     * Copia a lista de tarefas e adiciona uma nova com o título definido no
     * campo de input.
     */
    function addTask(title, description) {
        setTasks((currentTasks) => {
            return [
                ...currentTasks,
                {
                    id: crypto.randomUUID(),
                    title,
                    description,
                    completed: false,
                    isEditing: false,
                },
            ];
        });
    }

    /**
     * Retorna a lista sem a tarefa deletada.
     */
    function DeleteTask(id) {
        setTasks((currentTasks) => {
            return currentTasks.filter((tasks) => tasks.id !== id);
        });
    }

    /**
     * Mapeia a lista de tasks, caso a task mapeada tenha id == ao id passado
     * pela função, retorna uma copia da task com novos valores recebidos nos
     * parametros da função. Caso id seja diferente retorna a própria task sem
     * alteração.
     */
    function EditTask(id, title, description) {
        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? {
                        ...task,
                        isEditing: !task.isEditing,
                        title,
                        description,
                    }
                    : task
            )
        );
    }

    /**
     * Lista de tarefas feita em lógica de tabela para facilitar organização.
     */
    return (
        <section className="Home">
            <h1>
                Otimize seu tempo e se organize com o nosso Planejador Diário.
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <ViewTasks
                        tasks={tasks}
                        DeleteTask={DeleteTask}
                        toggleCompleted={toggleCompleted}
                        EditTask={EditTask}
                    />
                    <NewTask addTask={addTask} />
                </tbody>
            </table>
        </section>
    );
};

export default TaskList;
