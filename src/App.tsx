import './App.css';
import {Counter} from './components/Counter/Counter';
import React, {useEffect, useState} from 'react';
import {SettingCounter} from './components/SettingCounter/SettingCounter';


function App() {

    let [count, setCount] = useState<number>(0);
    const [minCount, setMinCount] = useState<number>(1);
    const [maxCount, setMaxCount] = useState<number>(5);
    const [nonError, setNonError] = useState<boolean>(true);

    useEffect(()=>{
            const storedObjectString = localStorage.getItem("minMaxParams");
            if(storedObjectString){
               let newValue =  JSON.parse(storedObjectString);

                setMinCount(+newValue.min)
                setMaxCount(+newValue.max)
            }
        },
        [])


    const SettingCounterMemo = React.memo(SettingCounter)

    return (

        <div className="container">
            <div className='container-wrap'>
                <Counter
                    nonError={nonError}
                    setError={setNonError}
                    count={count}
                    maxCount={maxCount}
                    minCount={minCount}
                    setCount={setCount}
                />
                <SettingCounter
                    nonError={nonError}
                    setNonError={setNonError}
                    minCount={minCount}
                    maxCount={maxCount}
                    setCount={setCount}
                    setMinCount={setMinCount}
                    setMaxCount={setMaxCount}
                />

            </div>
        </div>
    );
}

type minMaxParamsType = {
    min:string
    max:string
}
export default App;
