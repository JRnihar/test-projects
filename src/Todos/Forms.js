import React from 'react';
import { connect } from 'react-redux'
import * as actionTypes from '../store/action';


const Form = ({ title, setTitle, addItem, editItem, edit, error, setError }) => {
   
    const handleChange = (event) => {
        const title = event.target.value;

        setTitle(title);
        if (title.length === 0) {
            setError("Please enter title");
        } else {
            setError("");
        }
    }

    const handleClick = () => {
        if (title.length === 0) {
            setError("Please enter title");
            return;
        }
        if (edit) {
            editItem();
        } else {
            addItem();
        }
    }
    return (
       
           
                
                    <div>
            <input value={title} onChange={handleChange}
                error={!!error} />

            <button onClick={handleClick}>
                {edit ? "Edit" : "Add"}
            </button>
                    </div>
                
    )
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        edit: state.edit,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTitle: (title) => dispatch(actionTypes.setTitle(title)),
        setError: (error) => dispatch(actionTypes.setError(error)),
        addItem: () => dispatch(actionTypes.addItem()),
        editItem: () => dispatch(actionTypes.editItem()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);