import React from 'react';
import Image from 'next/image';

const CardMenu = ({ userDetailsStyles, titleCard, cardImage, isDisable }) => {
    return (
        <div className={`${userDetailsStyles.cardMenu} ${isDisable ? userDetailsStyles.disableCard: ''}`}>
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
