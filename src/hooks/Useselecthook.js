import React from "react";
import { useSelect } from "rooks";

const list = [
    {
        heading: "Index 0",
        content: " Batch 65",
    },
    {
        heading: "Index 1",
        content: "Mock Preparation Batch 65",
    },
];

function Useselecthook() {
    const { index, setIndex, item } = useSelect(list, 0);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            margin: '20px'
        }}>
            <p style={{
                color: '#c311d6',
                fontSize: '20px',
                margin: '10px',
                fontWeight: 'bold'
            }}>List Example</p>

            {list.map((listItem, listItemIndex) => (
                <button
                    key={listItemIndex}
                    style={{
                        background: index === listItemIndex ?
                            "#bdfca7" : "inherit",
                        width: '300px',
                        color: '#1c23a4',
                        fontSize: '20px',
                        margin: '10px'
                    }}
                    onClick={() => setIndex(listItemIndex)}
                >
                    {listItem.heading}
                </button>
            ))}
            <p style={{
                color: 'green',
                fontSize: '20px',
                margin: '10px',
                fontWeight: 'bold'
            }}>{item.content}</p>

        </div>
    );
}

export default Useselecthook;

