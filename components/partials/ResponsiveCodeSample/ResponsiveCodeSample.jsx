import {Children, Fragment, useState, useEffect, isValidElement, cloneElement} from 'react';
import cn from 'classnames';
//import Highlight, { defaultProps } from "prism-react-renderer";
import NoneScreenSize from "./screens/NoneScreenSize";
import SmScreenSize from "./screens/SmScreenSize";
import MdScreenSize from "./screens/MdScreenSize";
import LgScreenSize from "./screens/LgScreenSize";
import XlScreenSize from "./screens/XlScreenSize";
import HightlightedCodeSample from "./HightlightedCodeSample";

/*function recursiveChildrenMap(children, fn) {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = cloneElement(child, {
        children: recursiveChildrenMap(child.props.children, fn)
      });
    }

    return fn(child);
  });
}*/

const ResponsiveCodeSample = ({ children,  className, lang }, others) => {
  const [activeScreen, setActiveScreen] = useState('none');
  const [CodeHighlighted, setCodeHighlighted] = useState(null);
  const [NoneSize, setNoneSize] = useState(null);
  const [SmSize, setSmSize] = useState(null);
  const [MdSize, setMdSize] = useState(null);
  const [LgSize, setLgSize] = useState(null);
  const [XlSize, setXlSize] = useState(null);

  const setScreenSize = (children, typeScreen) => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }

      if (isValidElement(child) && child.props.mdxType === typeScreen){
        //console.log(child.props.mdxType);
        return child.props.children;
      }

    });

  }

  //const log = (c) => {
  //  console.log(c.props.mdxType);
 // }
  //recursiveChildrenMap(children, log)

  useEffect(() => {
    setActiveScreen('none');
    setCodeHighlighted(setScreenSize(children, 'HighlightCode'));
    setNoneSize(setScreenSize(children, 'NoneScreenSize'));
    setSmSize(setScreenSize(children, 'SmScreenSize'));
    setMdSize(setScreenSize(children, 'MdScreenSize'));
    setLgSize(setScreenSize(children, 'LgScreenSize'));
    setXlSize(setScreenSize(children, 'XlScreenSize'));
  },[])


    return (
        <Fragment>
          <div>

            <div className={`flex items-end justify-center mb-2 bg-white`}>
              <span className={cn("inline-block text-center cursor-pointer select-none mr-8", {'text-gray-800': activeScreen === 'none', 'text-gray-500': activeScreen !== 'none'})} onClick={() => setActiveScreen('none')}>
                <svg width={0.857142857142857 * 10} height="24" className="fill-current block mx-auto mb-1" viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z" fillRule="evenodd"/></svg>
                <p className="text-xs">all</p>
              </span>
              <span className={cn("inline-block text-center cursor-pointer select-none mr-8", {'text-gray-800': activeScreen === 'sm', 'text-gray-500': activeScreen !== 'sm'})} onClick={() => setActiveScreen('sm')}>
                <svg width={0.857142857142857 * 14} height="24" className="fill-current block mx-auto mb-1" viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fillRule="evenodd"/></svg>
                <p className="text-xs">sm</p>
              </span>
              <span className={cn("inline-block text-center cursor-pointer select-none mr-8", {'text-gray-800': activeScreen === 'md', 'text-gray-500': activeScreen !== 'md'})} onClick={() => setActiveScreen('md')}>
                <svg width={0.857142857142857 * 26} height="24" className="fill-current block mx-auto mb-1" viewBox="0 0 26 28" xmlns="http://www.w3.org/2000/svg"><path d="M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" fillRule="evenodd"/></svg>
                <p className="text-xs">md</p>
              </span>
              <span className={cn("inline-block text-center cursor-pointer select-none mr-8", {'text-gray-800': activeScreen === 'lg', 'text-gray-500': activeScreen !== 'lg'})} onClick={() => setActiveScreen('lg')}>
                <svg width={0.857142857142857 * 38} height="24" className="fill-current block mx-auto mb-1" viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg"><path d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z" fillRule="evenodd"/></svg>
                <p className="text-xs">lg</p>
              </span>
              <span className={cn("inline-block text-center cursor-pointer select-none mr-8", {'text-gray-800': activeScreen === 'xl', 'text-gray-500': activeScreen !== 'xl'})} onClick={() => setActiveScreen('xl')}>
                <svg width={0.857142857142857 * 36} height="24" className="fill-current block mx-auto mb-1" viewBox="0 0 36 28" xmlns="http://www.w3.org/2000/svg"><path d="M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"/></svg>
                <p className="text-xs">xl</p>
              </span>
            </div>

            <div className="overflow-hidden mb-8">

              <div className="rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm">
                <HightlightedCodeSample activeScreen={activeScreen}>{CodeHighlighted}</HightlightedCodeSample>
              </div>

              <div className={`rounded-b-lg border-l border-r border-b border-gray-400 bg-white p-4 ${className ? className : ''}`}>
                {activeScreen === 'none' ? NoneSize : ''}
                {activeScreen === 'sm' ?  SmSize : ''}
                {activeScreen === 'md' ?  MdSize : ''}
                {activeScreen === 'lg' ?  LgSize : ''}
                {activeScreen === 'xl' ?  XlSize : ''}
              </div>
            </div>

          </div>
        </Fragment>
    );
};

export default ResponsiveCodeSample;
