import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { ChooseLanguage } from './ChooseLanguage';

import { SearchIcon } from '../svg/SearchIcon';
import { LocationIcon } from '../svg/LocationIcon';

export const Header: React.FC = () => {
    return (
        <header>
            <div className="header-wrapper container p0">
                <ul className="links">
                    <li className='option'>
                        <NextLink href='/categories'>
                            Категории
                        </NextLink>
                    </li>
                    <li className='option'>
                        <NextLink href='/discounts'>
                            Скидки
                        </NextLink>
                    </li>
                    <li className='option'>
                        <SearchIcon />
                    </li>
                </ul>
                <NextLink href='/'>
                    <Image src='/images/headerLogo.png' alt='Childrenscard' height={42} width={160} />
                </NextLink>
                <ul className="links">
                    <li>
                        <ChooseLanguage />
                    </li>
                    <li className='flex-center option'>
                        <span>Алматы</span>
                        <LocationIcon />
                    </li>
                </ul>
            </div>
        </header>
    )
}