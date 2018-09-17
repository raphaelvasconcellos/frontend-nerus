import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';
export default class Home extends Component {

    homeCardLojas = {
        title: 'Lojas',
        text: 'Gerenciar Lojas',
        action: () => hashHistory.push('/lojas')
    }
    homeCardProdutos = {
        title: 'Produtos',
        text: 'Gerenciar Produtos',
        action: () => hashHistory.push('/produtos')
    }
    homeCardEstoques = {
        title: 'Estoques',
        text: 'Gerenciar Estoques',
        action: () => hashHistory.push('/estoques')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardLojas.title}
                        text={this.homeCardLojas.text}
                        action={this.homeCardLojas.action} />
                    <HomeCard {...this.homeCardProdutos} />
                    <HomeCard {...this.homeCardEstoques} />
                </div>
            </div>
        );
    }
}