import { useState } from "react";

const HelloWorld = () => {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);


    const toggle = () => value === 'hello' && setVisible(prev => !prev);
    const onChange = (e) => setValue(e.target.value);

    return (
        <div>
            <input onChange={onChange} id='search' type="text" />
            <button onClick={toggle} id='toggle'>Hello World</button>
            {visible && <h1 id='title'>Hello World</h1>}
        </div>
    );
};

export default HelloWorld;