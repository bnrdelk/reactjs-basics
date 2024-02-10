export const Task = (props) => {
    
    return (
        <div className='task'
        style={{ backgroundColor: props.isCompleted ? "green" : "red" }}
        >
          <h1>{props.name}</h1>

          <button onClick={() => props.completeTask(props.id)}> complete </button>
          <button onClick={() => props.deleteTask(props.id)}> delete </button>
          </div>
          );
};