import React, { Component } from 'react';

import ProdutosForm from '../ui/ProdutosForm';

export default class Produtos extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            produtos: [
                {
                    id: 1,
                    produtosName: 'Produto 01',
                    produtosDate: '01/01/2017'
                },
                {
                    id: 2,
                    produtosName: 'Produto 02',
                    produtosDate: '01/01/2018'
                },
                {
                    id: 3,
                    produtosName: 'Produto 03',
                    produtosDate: '01/01/2019'
                },
                {
                    id: 4,
                    produtosName: 'Produto 04',
                    produtosDate: '01/01/2020'
                }
            ]
        }
    }

    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myProdutos = {
            id: state.produtos.length + 1,
            produtosName: name,
            produtosDate: date
        }
        this.setState({produtos: state.produtos.concat(myProdutos)});
    }

    handleRemove(id){
        console.log('Implement remove function here!');
        var myProdutos = this.state.produtos;
        myProdutos.splice(id, 1)
        this.setState({produtos: myProdutos});
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <ProdutosForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome da Loja</th>
                            <th>Data de inicio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.produtos.map((produtos, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={produtos.id}>
                                    <th scope="row">{produtos.id}</th>
                                    <td>{produtos.produtosName}</td>
                                    <td>{produtos.produtosDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remove</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}