import React from 'react';
import NextLink from 'next/link';

import { HeaderLogo } from '../svg/HeaderLogo';
import { LogoutIcon } from '../svg/LogoutIcon';
import { Avatar } from '../common/Avatar';

export const Header: React.FC = () => {
    return (
        <header>
            <div className="header-wrapper container">
                <NextLink href='/main'>
                    <HeaderLogo />
                </NextLink>
                <ul className="links">
                    <li>
                        <NextLink href='/main'>
                            Главная
                        </NextLink>
                    </li>
                    <li>
                        <NextLink href='/'>
                            Моя страница
                        </NextLink>
                    </li>
                    <li>
                        <NextLink href='/bestTeacher'>
                            Лучший преподаватель
                        </NextLink>
                    </li>
                    <li>
                        <NextLink href='/terms'>
                            Правила оценивания
                        </NextLink>
                    </li>
                </ul>
                <Avatar name='Alma' surname='Valley' />
            </div>
        </header>
    )
}