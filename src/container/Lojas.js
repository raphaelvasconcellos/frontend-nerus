import React, { Component } from 'react';

import LojaForm from '../ui/LojaForm';

export default class Lojas extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            lojas: [
                {
                    id: 1,
                    lojaName: 'Loja 01',
                    lojaDate: '01/01/2017'
                },
                {
                    id: 2,
                    lojaName: 'Loja 02',
                    lojaDate: '01/01/2018'
                },
                {
                    id: 3,
                    lojaName: 'Loja 03',
                    lojaDate: '01/01/2019'
                },
                {
                    id: 4,
                    lojaName: 'Loja 04',
                    lojaDate: '01/01/2020'
                }
            ]
        }
    }

    handleSubmit(e, {name, date}) {
        e.preventDefault();
        var state = this.state;
        var myLoja = {
            id: state.lojas.length + 1,
            lojaName: name,
            lojaDate: date
        }
        this.setState({lojas: state.lojas.concat(myLoja)});
    }

    handleRemove(id){
        console.log('Implement remove function here!');
        var myLojas = this.state.lojas;
        myLojas.splice(id, 1)
        this.setState({lojas: myLojas});
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <LojaForm submitHandler={this.handleSubmit} />
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
                        {this.state.lojas.map((loja, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={loja.id}>
                                    <th scope="row">{loja.id}</th>
                                    <td>{loja.lojaName}</td>
                                    <td>{loja.lojaDate}</td>
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