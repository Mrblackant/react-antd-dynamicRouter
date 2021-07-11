import React, { useState, useCallback, useMemo } from 'react';
import Button from './children/componetOne';

function App () {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const handleClickButton1 = () => {
        setCount1(count1 + 1);
    };

    const handleClickButton2 = useCallback(() => {
        setCount2(count2 + 1);
    }, [count2]);

    const wantedNum = useMemo(() => {
        return count1 * 10
    }, [count1])

    return (
        <div>
            <p>useMemo展示: {wantedNum}</p>
            <div>
                <Button onClickButton={handleClickButton1}>Button1</Button>
            </div>
            <div>
                <Button onClickButton={handleClickButton2}>Button2</Button>
            </div>
            <div>
                <Button
                    onClickButton={() => {
                        setCount3(count3 + 1);
                    }}
                >
                    Button3
                </Button>
            </div>
        </div>
    );
}

export default App