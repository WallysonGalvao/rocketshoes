import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/72/HZM-1749-172/HZM-1749-172_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/72/HZM-1749-172/HZM-1749-172_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/72/HZM-1749-172/HZM-1749-172_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/72/HZM-1749-172/HZM-1749-172_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-nike-zoom-gravity-masculino/72/HZM-1749-172/HZM-1749-172_detalhe2.jpg?ims=326x"
                    alt="Tênis"
                />
                <strong>Tênis muito legal</strong>
                <span>R$129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#fff" />
                    </div>

                    <span>ADICIONAR AO CARRINHO</span>
                </button>
            </li>
        </ProductList>
    );
}
