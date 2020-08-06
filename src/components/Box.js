import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Box() {
    const color = useSelector((state) => state.color)
    const boxColors = useSelector(state => state.boxColors);
    const boxColor = boxColors || color;
    const dispatch = useDispatch()


    return (
        <div style={{
            margin: 10,
            width: 200,
            height: 100,
            border: "1px solid",
            backgroundColor: boxColor
        }}
        >
            <h1>Colorful box</h1>
            {/* <input
                onChange={e =>
                    dispatch({
                        type: "CHANGE_SPECIFIC_BOX",
                        payload: { color: e.target.value, }
                    })
                }
            ></input> */}
        </div>
    )
}