import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Check } from './components/check.js';
const Contact = ({ name }) => { 
    console.log('Contact component rendered', name);
    return ( 
            <div>
                <nav>
                    <ul>
                        <li>
                            Hello1
                        </li>
                        <li>
                            Hello2
                        </li>
                    </ul>
                </nav>
        </div>
    );
};

export default Contact;