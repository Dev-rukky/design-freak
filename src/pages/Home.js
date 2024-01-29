import HomeBg from '../assets/images/Hero-pic.png';
function Home() {
    return (
        <div className="home-container">
            <div className="home-left-con">
                <div className='home-text-con'>
                    <h1>Welcome!</h1>
                    <h2>I’m <span>dezyn freak</span></h2>
                    <p>Here, I blend passion with proficiency, offering a diverse skill set honed through years of dedication to my craft. Whether you're seeking captivating design, robust development, or compelling content, this digital space is your gateway to a world where creativity knows no bounds.</p>
                </div>
                <div className='home-tags-con'>
                    <div className='home-tag-up'>
                        <button className='ui'>UI/UX Design</button>
                        <button className='gd'>Graphics design</button>
                        <button className='pho'>Photography</button>
                    </div>
                    <div className='home-tag-down'>
                        <button className='edit'>Photo editing</button>
                        <button className='accmag'>Account Management</button>
                    </div>

                </div>
            </div>
            <img src={HomeBg} alt='Banner Avatar' />
        </div>
    )
}

export default Home;