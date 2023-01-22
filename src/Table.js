import { React, useEffect, useState } from "react"
const Table = ({ v1, v2, v3, v4, get }) => {

    const [value, setValue] = useState('');

    const change = (e) => {

        setValue(value + e)

        switch (e) {
            case '=':
                setValue(eval(value));
                break;

            case 'cancel':
                setValue(value.substring(0, value.length - 1));

                break;

            case 'clear':
                setValue('')
                break;

            case '**':
                setValue(value * value);
                break;

            default:
                break;
        }

    }
    useEffect(() => {
        get(value)
    }, [value])

    return (

        <>
            <table className="card border-2 p-1 calculator">
                <tbody>
                    <tr>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="%" >%</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="cancel" >cancel</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="clear">clear</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="*" >X</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="7" >7</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="8">8</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="9">9</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="+" >+</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="4" >4</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="5" >5</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="6" >6</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="-" >-</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="1" >1</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="2" >2</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="3">3</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="/" >/</button></td>
                    </tr>
                    <tr>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="0" >0</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="**" >x<sup>2</sup></button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value=".">.</button></td>
                        <td><button className="btn btn-primary" onClick={(e) => change(e.target.value)} value="=" >=</button></td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}
export default Table;