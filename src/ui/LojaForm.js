import React from 'react';

const LojaForm = ({submitHandler}) => {
    let _lojaName, _lojaDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _lojaName.value, 
            date: _lojaDate.value}
        );
        clearForm();
    }

    const clearForm = () => {
        _lojaDate.value = '';
        _lojaName.value = '';
    }
    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInput">Nome da Loja</label>
            <input type="text" ref={input => _lojaName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Set the Name" />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Data de Inicio</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input type="text" ref={input => _lojaDate = input} className="form-control" id="inlineFormInputGroup" placeholder="Set the Date" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default LojaForm;