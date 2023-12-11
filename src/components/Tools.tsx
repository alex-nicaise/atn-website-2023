import { Html5Original,
        BootstrapOriginal,
        SassOriginal,
        WordpressPlain,
        JavascriptOriginal,
        TypescriptOriginal,
        ReactOriginal } from 'devicons-react';


const Tools = ():React.JSX.Element => {

    return (
        <>
            <h1>Tools and Languages</h1>

            <div id="programming-icons">
                <div className="pi-flex-container">
                    <Html5Original/>
                </div>
                <div className="pi-flex-container">
                    <BootstrapOriginal/>
                </div>
                <div className="pi-flex-container">
                    <SassOriginal/>
                </div>
                <div className="pi-flex-container">
                    <WordpressPlain/>
                </div>
                <div className="pi-flex-container">
                    <JavascriptOriginal/>
                </div>
                <div className="pi-flex-container">
                    <TypescriptOriginal/>
                </div>
                <div className="pi-flex-container">
                    <ReactOriginal/>
                </div>
            </div>
        </>
    );
}

export default Tools;