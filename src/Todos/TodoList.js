import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/action';



function TodoList({ todoList, setTitle, setItem, setEdit, deleteItem }) {
    

    const handleEdit = (item) => {
        setTitle(item.value);
        setEdit();
        setItem(item);
    }

    const handleDelete = (item) => {
        setItem(item);
        deleteItem();
    }
    return (
        <div>
            {!todoList.length
                ?
                <h1>No Data to display</h1>
                :
                (<ul>
                    {todoList.map(item => {
                        return (
                            <li key={item.id} button>
                                

                                <h1>{item.value}</h1>
                                
                                    <button  onClick={() => handleEdit(item)}>
                                        Edit
                                    </button>
                                    <button  onClick={() => handleDelete(item)}>
                                        delete
                                    </button>
                                
                            </li>
                        )
                    })}
                </ul>)
            }
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        todoList: state.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setItem: (item) => dispatch(actionTypes.setItem(item)),
        deleteItem: (item) => dispatch(actionTypes.deleteItem(item)),
        setEdit: () => dispatch(actionTypes.setEdit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);