import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

const CardMenu = ({ userDetailsStyles, titleCard, cardImage, isDisable, path }) => {
    const router = useRouter();
    return (
        <div className={`${userDetailsStyles.cardMenu} ${isDisable ? userDetailsStyles.disableCard : ''}`} onClick={()=> !path ? null: router.push(path)}>
            <div>
                <Image
                    src={cardImage}
                />
            </div>
            <h3>{titleCard}</h3>
        </div>
    )
}

export default CardMenu
