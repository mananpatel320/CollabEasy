import React, { Component } from 'react';
import { Spacer } from './utilities';
import mainLogo from './teamwork.png';

export class Cover extends Component {
    render() {
        return (
            <div {...this.props} style={{
                padding: '4rem',
                ...this.props.style
            }} className='primary'>
                <div style={{ fontSize: '20px' }} className='flexbox cu vertical full'>
                    <h1><img src={mainLogo} width="42" height="42"></img>     Collab<strong>Easy</strong></h1>

                    <Spacer height='1rem'></Spacer>

                    <Spacer height='6rem'></Spacer>

                    <span style={{ fontSize: '0.8em' }}>A platform for you to collaborate, learn and grow together. Problem based learning helps learners to solve questions in a group using drawboard.</span>
                </div>
            </div>
        )
    }
}

export default Cover
