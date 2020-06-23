import {Fragment} from 'react';

let scroll = false;

const ClassTable = ({rows, children}) => {

    scroll = scroll ? scroll : true;
    scroll = (rows.length > 12 && scroll);

    return (
        <Fragment>
            <h2 style={{visibility: "hidden", fontSize: "0", margin: "0"}}>Class reference</h2>
            <div className="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
                <div className={`${scroll ? 'lg:max-h-sm' : ''} overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch`}>
                    <table className="w-full text-left table-collapse">
                        <thead>
                        <tr>
                            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th>
                            <th className="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th>
                        </tr>
                        </thead>
                        <tbody className="align-baseline">
                        {rows.length && rows.map((row, ridx ) => {
                        return (
                            <tr key={ridx}>
                            <td className={`p-2 border-t font-mono text-xs text-purple-700 whitespace-no-wrap ${ridx === 0 ? 'border-gray-300' : 'border-gray-200'}`}>{row[0]}</td>
                            <td className={`p-2 border-t font-mono text-xs text-blue-700 whitespace-pre ${ridx === 0 ? 'border-gray-300' : 'border-gray-200'}`}>{row[1]}</td>
                            </tr>
                        )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
};

export default ClassTable;