import { XyButton } from '../../common/XyButton';
// import { Image } from 'primereact/image';
import Image from 'next/image';
export const PhotoLinkCard = () => {
    const img = require('../../../public/images/XBrandLogo.png');
    return (
        <div className='grid grid-nogutter surface-0 text-800'>
            <div className='col-12 md:col-6 p-6 text-center md:text-left flex align-items-center '>
                <section>
                    <span className='block text-6xl font-bold mb-1'>
                        Create the screens
                    </span>
                    <div className='text-6xl text-primary font-bold mb-3'>
                        your visitors deserve to see
                    </div>
                    <p className='mt-0 mb-4 text-700 line-height-3'></p>

                    <XyButton
                        label='Learn More'
                        type='button'
                        className='mr-3 p-button-raised'
                    />
                    <XyButton
                        label='Live Demo'
                        type='button'
                        className='p-button-outlined'
                    />
                </section>
            </div>
            <div className='col-12 md:col-6 overflow-hidden'>
                <Image
                    src={img}
                    alt='logo-test'
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        </div>
    );
};
