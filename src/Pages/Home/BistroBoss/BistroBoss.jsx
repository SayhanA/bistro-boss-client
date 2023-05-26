import img from '../../../assets/home/chef-service.jpg'

const BistroBoss = () => {
    return (
        <div className='mx-auto relative  w-10/12'>
            <div style={{ background: `url(${img}) no-repeat fixed center/cover`, }} className="h-[600px] w-full">
            </div>
            <div className=' h-full w-full absolute top-0 p-36'>
                <div className=' bg-white w-full h-full flex flex-col items-center justify-center gap-5'>
                    <h3 className='text-4xl font-mono text-center uppercase'>Bistro Boss</h3>
                    <p className='px-40 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default BistroBoss;