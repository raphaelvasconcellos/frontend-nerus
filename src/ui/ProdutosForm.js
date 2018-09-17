import React from 'react';

const ProdutosForm = ({submitHandler}) => {
    let _produtosName, _produtosDate;
    const handleSubmit = (e) => {
        submitHandler(e, {
            name: _produtosName.value, 
            date: _produtosDate.value}
        );
        clearForm();
    }

    const clearForm = () => {
        _produtosDate.value = '';
        _produtosName.value = '';
    }
    return (
        <form onSubmit={handleSubmit} className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInput">Nome do Produto</label>
            <input type="text" ref={input => _produtosName = input} className="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Set the Name" />

            <label className="sr-only" htmlFor="inlineFormInputGroup">Data do Produto</label>
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                <input type="text" ref={input => _produtosDate = input} className="form-control" id="inlineFormInputGroup" placeholder="Set the Date" />
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
        </form>
    )
};

export default ProdutosForm;