import {Fragment, useEffect} from "react";
import Head from 'next/head';
import WorkflowAnimation from "../components/WorkflowAnimation";

const WorkflowAnimationPage = (props) => {

    useEffect(() => {
            document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    },[])

    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/tailwindcss@1.4.2/dist/tailwind.min.css"/>
                <link rel="stylesheet" href="/css/workflow-animation.css"/>
            </Head>
            <div style={{width: "640px", height: "480px", overflow: "hidden"}}>
                <div className="p-2">
                    <WorkflowAnimation {...props} />
                </div>
            </div>
        </Fragment>
        );
};

export default WorkflowAnimationPage;