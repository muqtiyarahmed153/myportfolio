const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>Check My Resume</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                            <h4>Bachelor of Engineering in Electronics &amp; Communication</h4>
                            <h5>2011 - 2015</h5>
                            <p><em>Jain Institute of Technology, Davanagere, Karnataka</em></p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Senior web development strategist</h4>
                            <h5>2023 - Present</h5>
                            <p><em>Pink Lemonade, Bangalore, Karnataka </em></p>
                        </div>
                        <div className="resume-item">
                            <h4>Web Developer</h4>
                            <h5>2016 - 2023</h5>
                            <p><em>Firstprinciples.io, Bangalore, Karnataka</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Resume;