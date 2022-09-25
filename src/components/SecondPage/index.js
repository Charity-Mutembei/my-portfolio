import './index.scss'
import Image from './../../assets/About/chiiii.png'
import Resume from './../../assets/JOB-DOC/CV 1 (2).pdf'

const About = ()=> {
    return (
        <>
            <div class="container" id="About">
                <div class="row">
                <div class="card mb-3" id="style">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={Image} class="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">About Me </h1>
                            <hr className="line"></hr>
                            <p class="card-text">
                                <span className="capital">M</span>y name is Charity Karimi Mutembei.
                                A 23 year-old born and raised young woman from Kenya
                                who is very passionate about solving problems and raising awareness through code. <br/>
                                I'm also an alumni of Moringa School with neccessary skills to not only build and maintain
                                websites, but also with immense ability to learn. 
                            </p>
                            <hr class="tales"/>
                            <p class="card-text"><small class="text">Find my Resume <i class="fas fa-directions" id="icon"></i> 
                            <a href={Resume} id="resume">
                                 Resume
                            </a>
                            </small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="checkbelow">
            <a class="link" href="About">
                <span class="link__arrow">
                    <span></span>
                    <span></span>
                </span>
                <span class="link__line"></span>
                <span class="link__text"><strong>Next</strong></span>
                </a>
            </div>
                </div>
        </>
    )
}

export default About