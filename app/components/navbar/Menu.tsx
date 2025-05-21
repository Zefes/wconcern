'use client';

import { useState, useEffect } from "react";
import { X } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false); // Variável para garantir que o componente seja renderizado apenas no lado do cliente

    // Usar useEffect para garantir que a renderização só ocorra no lado do cliente
    useEffect(() => {
        setIsClient(true);
    }, []);

    const menuItems = [
        { label: 'Página Inicial', href: '/' },
        { label: 'Quem Somos', href: '/quemsomos/' },
        { label: 'Dia a Dia', href: '/diadia/' },
        { label: 'Galeria', href: '/galeria/' },
        { label: 'Projectos', href: '/projectos/' },
        { label: 'Relatório', href: 'relactorio' },
        { label: 'Oportunidades', href: '#' },
        { label: 'FAQ', href: '/faq/' },
        { label: 'Contacto', href: '#' },
    ];

    return (
        <div className="relative">
            {/* Fundo escuro quando o menu abre */}
            <div className={`fixed inset-0  bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} sm:hidden`} />

            {/* Menu para Telas Grandes */}
            <div className="hidden sm:flex text-teal-800 items-center justify-between space-x-12 px-6 py-4 bg-white">
                {menuItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-lg font-semibold hover:text-yellow-500 hover:underline transition duration-300 whitespace-nowrap"
                    >
                        {item.label}
                    </Link>
                    ))}
                {/* Botão Doar */}
                <Link href='/doa/'>
                    <button className="bg-teal-700 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-yellow-500 transition duration-300 whitespace-nowrap">
                        Doar
                    </button>
                </Link>

            </div>

            {/* Menu para Telas Móveis */}
            <div className="sm:hidden flex items-center justify-between space-x-2">

                {/* Botão Doar ajustado para a esquerda */}
                <Link href='/doa/'>
                    <button className="bg-teal-800 text-white px-4 py-1 rounded-full hover:bg-teal-700 transition duration-300">
                        Doar
                    </button>
                </Link>

                {/* Botão de menu (Hambúrguer) */}
                <div className="space-y-1 cursor-pointer " onClick={() => setIsMenuOpen(true)}>
                    <div className="w-6 h-1 bg-yellow-800"></div>
                    <div className="w-6 h-1 bg-yellow-800"></div>
                    <div className="w-6 h-1 bg-yellow-800"></div>
                </div>
            </div>

            {/* Menu Lateral Móvel */}
            <div className={`fixed top-0 right-0 h-full w-[300px] bg-teal-800 text-white shadow-lg transform ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out sm:hidden`}>
                {/* Botão Fechar */}
                <div className="flex justify-end p-1 ">
                    <button onClick={() => setIsMenuOpen(false)}>
                        <X size={28} className="text-white" />
                    </button>
                </div>

                {/* Versão Mobile */}
                <nav className="flex flex-col space-y-4 mt-12 px-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className="text-xl font-semibold border-b border-white/30 pb-2 cursor-pointer hover:text-gray-300 whitespace-nowrap"
                            onClick={() => setIsMenuOpen(false)} // fecha o menu ao clicar
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default Menu;
