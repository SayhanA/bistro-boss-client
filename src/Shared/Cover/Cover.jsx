// import coverImg from '../../assets/menu/banner3.jpg';

// import { Parallax } from 'react-parallax';


const Cover = ({ coverImg, title, text }) => {
    return (
            <div className='mx-auto relative'>
                <div style={{ background: `url(${coverImg}) no-repeat fixed center/cover`, }} className="h-[600px] w-full">
                </div>
                <div className='absolute top-0 pt-48 left-[50%] translate-x-[-50%] text-white'>
                    <div className=' bg-[#0000007a] h-[300px] w-[900px] flex flex-col items-center justify-center'>
                        <h3 className=' text-center uppercase text-8xl font-serif'>{title}</h3>
                        <p style={{ wordSpacing: "5px" }} className='px-40 text-center uppercase text-2xl font-serif '>{text}</p>
                    </div>
                </div>
            </div>
        // </Parallax>


    );
};

export default Cover;